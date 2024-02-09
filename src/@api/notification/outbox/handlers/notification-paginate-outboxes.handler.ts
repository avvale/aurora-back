import { Pagination } from '@api/graphql';
import { NotificationPaginateOutboxesQuery } from '@app/notification/outbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationPaginateOutboxesHandler
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
        return await this.queryBus.ask(new NotificationPaginateOutboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
