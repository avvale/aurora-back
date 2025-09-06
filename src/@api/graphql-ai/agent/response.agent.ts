import { Agent } from '@openai/agents';
import { MODEL } from '../orchestrator/types';

export const responseAgentFactory = (): Agent<any, any> =>
{
    return new Agent({
        name        : 'Response Agent',
        model       : MODEL.GPT_4_1_NANO,
        instructions: 'Return the "result" field if present, otherwise the latest envelope.',
    });
};
