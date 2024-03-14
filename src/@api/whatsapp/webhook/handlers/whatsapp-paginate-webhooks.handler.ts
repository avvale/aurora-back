import { Pagination } from '@api/graphql';
import { WhatsappPaginateWebhooksQuery } from '@app/whatsapp/webhook';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappPaginateWebhooksHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new WhatsappPaginateWebhooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
