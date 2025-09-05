import { Agent } from '@openai/agents';
import { MODEL } from '../orchestrator/types';

export const composerAgent = new Agent({
    name        : 'GraphQL Composer Agent',
    model       : MODEL.GPT_4_1_MINI,
    instructions: `Build "query" in a Sequelize-like JSON, WITHOUT changing field or operator names yet.
- Input envelope has request.step == "VALIDATOR" and status == "DONE".
- Output:
  {
    "request":{"step":"VALIDATOR","status":"DONE"},
    "llm":{...},
    "query":{ "where":{...}, "include":[...], "attributes"?:..., "group"?:..., "limit"?:..., "offset"?:... }
  }
- For "range":"last month", add textual filters like:
  {"creation date": {"mayor":"first day of the previous month"}, "creation date":{"menor":"last day of the previous month"}}
- Never rename tables or fields here.
`,
});