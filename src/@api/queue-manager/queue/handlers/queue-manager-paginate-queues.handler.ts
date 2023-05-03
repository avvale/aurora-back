import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { PaginateQueuesQuery } from '@app/queue-manager/queue/application/paginate/paginate-queues.query';
import { Pagination } from '@api/graphql';

@Injectable()
export class QueueManagerPaginateQueuesHandler
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
        return await this.queryBus.ask(new PaginateQueuesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}