import { Agent } from '@openai/agents';
import { MODEL } from '../orchestrator/types';

// The model will consult the MCP "graphql-operators" prompt to align operators.
export const operatorAgent = new Agent({
    name        : 'GraphQL Operator Agent',
    model       : MODEL.GPT_5_MINI,
    instructions: `You replace natural-language operators within "query" to criteria tokens per the MCP prompt "graphql-operators".
- Read prompt "graphql-operators" via MCP prompts API.
- Replace only operators, not field names (those were resolved already).
- Example: "empieza por" -> "[startsWith]", "mayor" -> "[gt]", "media" -> "[avg]" (if aggregation).
- If you find an unrecognized operator, return:
  {"request":{"step":"OPERATOR","status":"ERROR","error":"the operator <op> is not recognizable within the list of operators allowed in the <field> field.","target":"OPERATOR"}, ...}
- Otherwise, output the same envelope with request.step "EQUIVALENCE"/status "DONE" preserved and the "query" mutated to use [op] bracket syntax.
`,
});