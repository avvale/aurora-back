/* eslint-disable no-await-in-loop */
import { Agent, run, RunContext, RunState } from '@openai/agents';
import { RequestEnvelope, STATUS, STEP } from './types';

const defaultFlow: STEP[] = [
    STEP.LLM,
    //STEP.VALIDATOR,
    //STEP.COMPOSER,
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
            llm    : { table: null, attributes: null, order: null, where: null, include: null },
            query  : {},
        };

        state.history.push(userText);

        // Create a RunContext to carry our envelope across runs
        const runCtx = new RunContext<{ envelope: Partial<RequestEnvelope>; }>({ envelope: state });
        // We'll reuse the same RunState across iterations
        let runState: RunState<{ envelope: Partial<RequestEnvelope>; }, Agent<any, any>> | undefined;

        let count = 0;

        // Walk the flow until RESPONSE
        while (true)
        {
            count++;
            if (count > 2) throw new Error('Too many iterations in agents orchestration loop');

            const agent = agents[state.request.step];

            console.log('Agent: ', state.request.step);
            console.log('Input:', JSON.stringify(state, null, 2));

            // Build a richer prompt so the agent always sees the latest envelope
            // eslint-disable-next-line max-len
            const effectivePrompt = `${userText}\n\nYou are part of a multi-agent orchestration. You MUST update the JSON envelope you receive in context and return it as { finalOutput: <envelope> }. Here is the latest envelope (JSON):\n${JSON.stringify(state)}`;

            // Keep the RunContext's envelope in sync with our local state
            runCtx.context.envelope = state;

            // Initialize (first turn) or continue (subsequent turns) with RunState
            if (!runState)
            {
                // Max turns is internal to a single agent run; keep small as we loop externally
                runState = new RunState(runCtx, count === 1 ? userText : effectivePrompt, agent, 3);
            }

            const res = await run(agent, runState);
            state = res.finalOutput;
            runState = res.state;

            console.log('Output:', JSON.stringify(state, null, 2));

            // Handle ERROR: route to target (LLM/EQUIVALENCE/OPERATOR/EXECUTOR)
            // if (state.request?.status === STATUS.ERROR)
            if (false)
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

            console.log('defaultFlow.length:', defaultFlow.length);
            console.log('stepCurrentIndex:', stepCurrentIndex + 1 >= defaultFlow.length);

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
