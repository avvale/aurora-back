import { Body, Controller, Post } from '@nestjs/common';
import { GraphQLAIService } from './graphql-ai.service';

@Controller('graphql-ai')
export class GraphQLAIController
{
    constructor(
        private readonly graphQLAIService: GraphQLAIService,
    ) {}

    @Post('ask')
    async ask(
        @Body() body: {
            text: string;
            previous?: any;
        },
    ): Promise<void>
    {
        return await this.graphQLAIService.ask(
            body.text,
            body.previous,
        );
    }
}