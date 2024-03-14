import { WhatsappWebhook } from '@api/graphql';
import { WhatsappFindWebhookHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.get')
export class WhatsappFindWebhookResolver
{
    constructor(
        private readonly handler: WhatsappFindWebhookHandler,
    ) {}

    @Query('whatsappFindWebhook')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<WhatsappWebhook>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
