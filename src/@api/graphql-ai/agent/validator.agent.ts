import { Agent } from '@openai/agents';
import { MODEL } from '../orchestrator/types';

export const validatorAgentFactory = (): Agent =>
{
    return new Agent({
        name        : 'Validator Agent',
        model       : MODEL.GPT_4_1_NANO,
        instructions: `
You validate "llm" is sufficient to build a Sequelize-like JSON.
    - If sufficient, respond with a JSON enveloped as:
    {"request":{"step":"VALIDATOR","status":"DONE"}, ...carry llm..., "query":{...draft...}}
    - If insufficient or ambiguous, respond with:
    {"request":{"step":"VALIDATOR","status":"ERROR","error":"<reason>","target":"LLM"}, ...carry llm...}
    Rules:
    - Ensure "table" exists.
    - If an aggregation is requested (e.g., "media", "suma"), ensure a "field" exists.
    - If a "range" exists, keep it textual (e.g., "ultimo mes"); the Composer will resolve it.
    - Include nested "include" blocks if provided (they can be partial).
    `,
    });
};
