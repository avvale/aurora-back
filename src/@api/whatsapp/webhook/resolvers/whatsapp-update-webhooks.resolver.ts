import { WhatsappUpdateWebhooksInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpdateWebhooksHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.update')
export class WhatsappUpdateWebhooksResolver
{
    constructor(
        private readonly handler: WhatsappUpdateWebhooksHandler,
    ) {}

    @Mutation('whatsappUpdateWebhooks')
    async main(
        @Args('payload') payload: WhatsappUpdateWebhooksInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
