/* eslint-disable no-await-in-loop */
import { Agent, run } from '@openai/agents';
import { RequestEnvelope, STATUS, STEP } from './types';

const defaultFlow: STEP[] = [
    STEP.LLM,
    //STEP.VALIDATOR,
    STEP.COMPOSER,
   // STEP.EQUIVALENCE,
   // STEP.OPERATOR,
   // STEP.EXECUTOR,
   //  STEP.RESPONSE,
];

export async function runAuroraAgents(
    agents: Partial<Record<STEP, Agent<any, any>>>,
    userText: string,
    prev?: RequestEnvelope,
): Promise<Partial<RequestEnvelope>>
{
    try
    {
        // 1) Bootstrap: If no prev envelope, ask LLM Agent to structure the request
        // Provide an initial empty envelope via run context for the LLM to complete
        let state: Partial<RequestEnvelope> = {
            history: [],
            request: { step: STEP.LLM, status: STATUS.DONE, targetStep: null, error: null },
            llm    : { table: null, field: null, operator: null, value: null, range: null, format: null, include: null },
            query  : null,
        };

        state.history.push(userText);

        let count = 0;

        // Walk the flow until RESPONSE
        while (true)
        {
            count++;
            if (count > 5) throw new Error('Too many iterations in agents orchestration loop');

            const agent = agents[state.request.step];

            console.log('Agent: ', state.request.step);
            console.log('Input:', JSON.stringify(state, null, 2));

            const res = await run(agent, userText, { context: { envelope: state }});
            state = res.finalOutput;

            console.log('Output:', JSON.stringify(state, null, 2));

            // Handle ERROR: route to target (LLM/EQUIVALENCE/OPERATOR/EXECUTOR)
            if (state.request?.status === STATUS.ERROR)
            {
                console.log('ERROR!!!');
                state.request.targetStep = state.request.step;
                state.request.step = STEP.LLM;
                continue;
            }
            else
            {
                state.request.targetStep = null;
                state.request.error = null;
            }

            const stepCurrentIndex = defaultFlow.indexOf(state.request.step);

            // If last step, break
            if (stepCurrentIndex + 1 >= defaultFlow.length) break;

            // get next step
            state.request.step = defaultFlow[stepCurrentIndex + 1];

            console.log('Current index step:', stepCurrentIndex);
            console.log('Next index step:', stepCurrentIndex + 1);
            console.log('Next step:', state.request.step);
        }

        return state;
    }
    catch (err)
    {
        console.error('Error in runAuroraAgents:', err);
    }
}
