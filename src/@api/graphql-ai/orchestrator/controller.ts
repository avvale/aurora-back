/* eslint-disable no-await-in-loop */
import { Agent, run, setDefaultOpenAIKey } from '@openai/agents';
import { llmAgent } from '../agent/llm.agent';
import { validatorAgent } from '../agent/validator.agent';
import { equivalenceAgent } from '../agent/equivalence.agent';
import { operatorAgent } from '../agent/operator.agent';
import { executorAgent } from '../agent/executor.agent';
import { composerAgent } from '../agent/composer.agent';
import { responseAgent } from '../agent/response.agent';
import { RequestEnvelope, STATUS, STEP } from './types';

// Initialize OpenAI client
setDefaultOpenAIKey(process.env.OPENAI_API_KEY);

const agents: Record<STEP, Agent> = {
    [STEP.LLM]        : llmAgent,
    [STEP.COMPOSER]   : composerAgent,
    [STEP.VALIDATOR]  : validatorAgent,
    [STEP.EQUIVALENCE]: equivalenceAgent,
    [STEP.OPERATOR]   : operatorAgent,
    [STEP.EXECUTOR]   : executorAgent,
    [STEP.RESPONSE]   : responseAgent,
};

const defaultFlow: STEP[] = [
    STEP.VALIDATOR,
    STEP.EQUIVALENCE,
    STEP.OPERATOR,
    STEP.EXECUTOR,
    STEP.RESPONSE,
];

export async function runAuroraAgents(
    userText: string,
    prev?: RequestEnvelope,
): Promise<void>
{
    try
    {
        // 1) Bootstrap: If no prev envelope, ask LLM Agent to structure the request
        let state: RequestEnvelope = JSON.parse((await run(agents.LLM, userText)).finalOutput);

        // 2) Orchestration loop
        let cursor: STEP | undefined = state?.request?.target;

        console.log('Initial state:', state);

        // If we came from LLM, go to VALIDATOR
        if (!cursor && state?.request?.step === STEP.LLM) cursor = STEP.VALIDATOR;

        console.log('Initial cursor:', cursor);

        // Walk the flow until RESPONSE
        while (cursor && cursor !== STEP.RESPONSE)
        {
            const agent = agents[cursor];

            console.log('Agent: ', cursor);

            const res = await run(agent, JSON.stringify(state));

            console.log('Output:', res.finalOutput);

            // The Agents SDK returns a RunResult; we expect agent to output the JSON envelope string
            const out = res.finalOutput;
            let envelope: RequestEnvelope;
            try
            {
                envelope = typeof out === 'string' ? JSON.parse(out) : out;
            }
            catch
            {
                throw new Error(`Agent ${cursor} did not return JSON`);
            }

            // Handle ERROR: route to target (LLM/EQUIVALENCE/OPERATOR/EXECUTOR)
            if (envelope.request?.status === STATUS.ERROR)
            {
                cursor = (envelope.request?.target) ?? STEP.LLM;
                state = envelope;
                continue;
            }

            // If VALIDATOR success → Composer before Equivalence
            if (
                cursor === STEP.VALIDATOR &&
                envelope.request?.status === STATUS.DONE
            )
            {
                const composed = await run(agents[STEP.VALIDATOR], JSON.stringify(envelope));
                const composedOut = composed.finalOutput;
                envelope = typeof composedOut === 'string' ? JSON.parse(composedOut) : composedOut;

                const composer = await run(agents[STEP.EQUIVALENCE], JSON.stringify(envelope));
                const compOut = composer.finalOutput;
                state = typeof compOut === 'string' ? JSON.parse(compOut) : compOut;
                cursor = STEP.OPERATOR;
                continue;
            }

            // After EQUIVALENCE → OPERATOR
            if (cursor === STEP.EQUIVALENCE && envelope.request?.status === STATUS.DONE)
            {
                state = envelope;
                cursor = STEP.OPERATOR;
                continue;
            }

            // After OPERATOR → EXECUTOR
            if (cursor === STEP.OPERATOR && envelope.request?.status === STATUS.DONE)
            {
                const exec = await run(agents.EXECUTOR, JSON.stringify(envelope));
                const execOut = exec.finalOutput;
                state = typeof execOut === 'string' ? JSON.parse(execOut) : execOut;
                cursor = STEP.RESPONSE;
                continue;
            }

            // After EXECUTOR → RESPONSE
            if (cursor === STEP.EXECUTOR)
            {
                state = envelope;
                cursor = STEP.RESPONSE;
                continue;
            }

            state = envelope;
            cursor = STEP.RESPONSE;
        }

        // Final response agent
        const finalRes = await run(agents.RESPONSE, JSON.stringify(state));
        return typeof finalRes.finalOutput === 'string' ? JSON.parse(finalRes.finalOutput) : finalRes.finalOutput;
    }
    finally
    {
        // Do not close MCP servers here; they are pooled and shared.
    }
}
