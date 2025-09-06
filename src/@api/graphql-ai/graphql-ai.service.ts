import { Injectable, OnApplicationShutdown, OnApplicationBootstrap } from '@nestjs/common';
import { runAuroraAgents } from './orchestrator/controller';
import { closeAllMcpServers } from './mcp-client/mcp-pool';
import { STEP } from './orchestrator/types';
import { Agent, setDefaultOpenAIKey } from '@openai/agents';
import { executorAgentFactory } from './agent/executor.agent';
import { equivalenceAgentFactory } from './agent/equivalence.agent';
import { operatorAgentFactory } from './agent/operator.agent';
import { responseAgentFactory } from './agent/response.agent';
import { llmAgentFactory } from './agent/llm.agent';
import { composerAgentFactory } from './agent/composer.agent';
import { validatorAgentFactory } from './agent/validator.agent';

const baseUrl = process.env.APP_URL;

@Injectable()
export class GraphQLAIService implements OnApplicationBootstrap, OnApplicationShutdown
{
    agents: Partial<Record<STEP, Agent<any, any>>> = {
        [STEP.LLM]        : null,
        [STEP.COMPOSER]   : null,
        [STEP.VALIDATOR]  : null,
        [STEP.EQUIVALENCE]: null,
        [STEP.OPERATOR]   : null,
        [STEP.EXECUTOR]   : null,
        [STEP.RESPONSE]   : null,
    };

    constructor()
    {}

    onApplicationBootstrap(): void
    {
        // Initialize OpenAI client
        setDefaultOpenAIKey(process.env.OPENAI_API_KEY);

        // wait to nest tick to initialize agents
        setTimeout(async () =>
        {
            this.agents[STEP.LLM]         = llmAgentFactory();
            this.agents[STEP.VALIDATOR]   = validatorAgentFactory();
            this.agents[STEP.COMPOSER]    = composerAgentFactory();
            this.agents[STEP.EQUIVALENCE] = await equivalenceAgentFactory(baseUrl);
            this.agents[STEP.OPERATOR]    = operatorAgentFactory();
            this.agents[STEP.EXECUTOR]    = await executorAgentFactory(baseUrl);
            this.agents[STEP.RESPONSE]    = responseAgentFactory();
        });
    }

    async onApplicationShutdown(): Promise<void>
    {
        await closeAllMcpServers();
    }

    async ask(
        text: string,
        previous?: any,
    ): Promise<void>
    {
        // previous can be the last envelope (for multi-turn clarification loops)
        await runAuroraAgents(
            this.agents,
            text,
            previous,
        );
    }
}
