import { MCPServerStreamableHttp } from '@openai/agents';

type Profile = 'readOnly' | 'highlighted' | 'execute';

type Key = `${string}|${Profile}`;

const instances = new Map<Key, MCPServerStreamableHttp>();

/**
 * Creates an instance of `MCPServerStreamableHttp` configured for a specific profile.
 *
 * Depending on the provided `profile`, the server will filter available tools:
 * - `'readOnly'`: Hides all tools, exposing only resources and prompts.
 * - `'highlighted'`: Exposes only tools whose names match the pattern `gql-query-*`.
 * - `'execute'`: Exposes only the `graphql-execute` tool.
 *
 * @param url - The base URL for the server.
 * @param profile - The profile type determining tool visibility and server behavior.
 * @returns A configured `MCPServerStreamableHttp` instance.
 */
const makeMCPServer = (
  url: string,
  profile: Profile,
): MCPServerStreamableHttp => {
  const baseCfg = {
    url,
    cacheToolsList: true,
    name: `Aurora GraphQL Server MCP (${profile})`,
  };

  switch (profile) {
    case 'readOnly':
      return new MCPServerStreamableHttp({
        ...baseCfg,
        // Hide ALL tools (only resources/prompts)
        toolFilter: () => Promise.resolve(false),
      });

    case 'highlighted':
      return new MCPServerStreamableHttp({
        ...baseCfg,
        // Only gql-query-* tools
        toolFilter: (_ctx, tool) =>
          Promise.resolve(/^gql-query-/.test(tool.name)),
      });

    case 'execute':
      return new MCPServerStreamableHttp({
        ...baseCfg,
        // Only graphql-execute
        toolFilter: (_ctx, tool) =>
          Promise.resolve(tool.name === 'graphql-execute'),
      });
  }
};

export const getMcpServer = async (
  baseUrl: string,
  profile: Profile,
  url: string = '/mcp',
): Promise<MCPServerStreamableHttp> => {
  const key: Key = `${baseUrl}|${profile}`;
  let mcpServer = instances.get(key);
  if (!mcpServer) {
    mcpServer = makeMCPServer(`${baseUrl}${url}`, profile);
    instances.set(key, mcpServer);

    await mcpServer.connect(); // connect ONCE
  } else {
    await mcpServer.connect(); // ensure connection if needed
  }

  return mcpServer;
};

// Optional: graceful shutdown
export const closeAllMcpServers = async (): Promise<void> => {
  await Promise.all(
    [...instances.values()].map((i) => i.close().catch(() => {})),
  );
  instances.clear();
};
