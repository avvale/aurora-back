import { WhatsappWebhook } from '@api/graphql';
import { WhatsappFindWebhookByIdHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.get')
export class WhatsappFindWebhookByIdResolver
{
    constructor(
        private readonly handler: WhatsappFindWebhookByIdHandler,
    ) {}

    @Query('whatsappFindWebhookById')
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
