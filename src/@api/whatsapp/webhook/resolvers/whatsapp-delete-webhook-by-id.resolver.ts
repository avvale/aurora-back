import { WhatsappWebhook } from '@api/graphql';
import { WhatsappDeleteWebhookByIdHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.delete')
export class WhatsappDeleteWebhookByIdResolver
{
    constructor(
        private readonly handler: WhatsappDeleteWebhookByIdHandler,
    ) {}

    @Mutation('whatsappDeleteWebhookById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
