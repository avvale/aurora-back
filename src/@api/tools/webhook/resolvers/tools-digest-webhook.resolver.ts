import { ToolsDigestWebhookHandler } from '@api/tools/webhook';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class ToolsDigestWebhookResolver {
    constructor(private readonly handler: ToolsDigestWebhookHandler) {}

    @Mutation('toolsDigestWebhook')
    async main(@Args('payload') payload: any): Promise<boolean> {
        return await this.handler.main(payload);
    }
}
