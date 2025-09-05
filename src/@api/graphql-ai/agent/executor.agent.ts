import { Agent } from '@openai/agents';
import { getMcpServer } from '../mcp-client/mcp-pool';
import { MODEL } from '../orchestrator/types';

export const executorAgentFactory = async (
    mcpBaseUrl: string,
): Promise<Agent> =>
{
    return new Agent({
        name        : 'GraphQL Executor Agent',
        model       : MODEL.GPT_4_1_NANO,
        instructions: `You execute GraphQL via MCP tools:
- Prefer "gql-query-{fieldName}" when operationName directly maps to a highlighted field tool.
- Otherwise use "graphql-execute" with the operationName and variables built from "query".
- Ensure you have everything needed: operationName, normalized "query".
- Output final envelope as:
  {"request":{"step":"EXECUTOR","status":"DONE","target":"RESPONSE"}, "result": <tool json>, ...carry llm/query/operationName...}
- If execution fails, return {"request":{"step":"EXECUTOR","status":"ERROR","error":"<reason>","target":"EXECUTOR"}}
`,
        mcpServers: [
            await getMcpServer(mcpBaseUrl, 'highlighted'),
            await getMcpServer(mcpBaseUrl, 'execute'),
        ],
    });
}
