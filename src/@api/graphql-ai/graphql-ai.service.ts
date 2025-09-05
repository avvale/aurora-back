import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { runAuroraAgents } from './orchestrator/controller';
import { closeAllMcpServers } from './mcp-client/mcp-pool';

@Injectable()
export class GraphQLAIService implements OnApplicationShutdown
{
    async ask(
        text: string,
        previous?: any,
    ): Promise<void>
    {
        // previous can be the last envelope (for multi-turn clarification loops)
        await runAuroraAgents(
            text,
            previous,
        );
    }

    async onApplicationShutdown(): Promise<void>
    {
        await closeAllMcpServers();
    }
}
