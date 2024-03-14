import { WhatsappWebhook } from '@api/graphql';
import { WhatsappDeleteWebhooksHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.delete')
export class WhatsappDeleteWebhooksResolver
{
    constructor(
        private readonly handler: WhatsappDeleteWebhooksHandler,
    ) {}

    @Mutation('whatsappDeleteWebhooks')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
