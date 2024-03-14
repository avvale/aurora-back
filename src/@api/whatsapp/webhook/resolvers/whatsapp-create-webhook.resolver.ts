import { WhatsappCreateWebhookInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappCreateWebhookHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.create')
export class WhatsappCreateWebhookResolver
{
    constructor(
        private readonly handler: WhatsappCreateWebhookHandler,
    ) {}

    @Mutation('whatsappCreateWebhook')
    async main(
        @Args('payload') payload: WhatsappCreateWebhookInput,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
