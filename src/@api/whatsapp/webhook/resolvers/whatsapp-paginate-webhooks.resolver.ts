import { Pagination } from '@api/graphql';
import { WhatsappPaginateWebhooksHandler } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('whatsapp.webhook.get')
export class WhatsappPaginateWebhooksResolver
{
    constructor(
        private readonly handler: WhatsappPaginateWebhooksHandler,
    ) {}

    @Query('whatsappPaginateWebhooks')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
