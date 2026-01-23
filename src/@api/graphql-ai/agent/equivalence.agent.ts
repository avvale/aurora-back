import { Agent } from '@openai/agents';
import { getMcpServer } from '../mcp-client/mcp-pool';
import { MODEL } from '../orchestrator/types';

// The model will use MCP resources; we bias to highlight schema via instructions.
const weighting = Number(process.env.MCP_HIGHLIGHT_WEIGHTING ?? '0.7');

export const equivalenceAgentFactory = async (
  mcpBaseUrl: string,
): Promise<Agent<any, any>> => {
  return new Agent({
    name: 'GraphQL Semantic Equivalence Agent',
    model: MODEL.GPT_4_1_NANO,
    instructions: `You map user-language tables/fields to GraphQL operation and canonical field names.
Resources available via MCP:
- "graphql-highlight-schema" (weight ${weighting})
- "graphql-common-schema"   (weight ${1 - weighting})
Process:
1) Read both schemas via MCP resources.
2) Prefer matches in highlight-schema (weighting ${weighting}).
3) If ambiguous, return:
   {"request":{"step":"EQUIVALENCE","status":"ERROR","error":"ambiguous <detail>","target":"EQUIVALENCE"}, ...}
4) If resolved, set "operationName" and rewrite "query" field names accordingly (e.g., "correo electrónico" -> "email").
5) Do NOT change operators here; only names and operationName.
`,
    mcpServers: [await getMcpServer(mcpBaseUrl, 'readOnly')],
  });
};
