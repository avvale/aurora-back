import { WhatsappCreateWebhookInput } from '@api/graphql';
import { WhatsappCreateWebhooksHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.create')
export class WhatsappCreateWebhooksResolver
{
    constructor(
        private readonly handler: WhatsappCreateWebhooksHandler,
    ) {}

    @Mutation('whatsappCreateWebhooks')
    async main(
        @Args('payload') payload: WhatsappCreateWebhookInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
