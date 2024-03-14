import { WhatsappUpdateWebhookByIdInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpdateWebhookByIdHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.update')
export class WhatsappUpdateWebhookByIdResolver
{
    constructor(
        private readonly handler: WhatsappUpdateWebhookByIdHandler,
    ) {}

    @Mutation('whatsappUpdateWebhookById')
    async main(
        @Args('payload') payload: WhatsappUpdateWebhookByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
