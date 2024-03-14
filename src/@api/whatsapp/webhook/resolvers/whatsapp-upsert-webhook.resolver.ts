import { WhatsappUpdateWebhookByIdInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpsertWebhookHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.upsert')
export class WhatsappUpsertWebhookResolver
{
    constructor(
        private readonly handler: WhatsappUpsertWebhookHandler,
    ) {}

    @Mutation('whatsappUpsertWebhook')
    async main(
        @Args('payload') payload: WhatsappUpdateWebhookByIdInput,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
