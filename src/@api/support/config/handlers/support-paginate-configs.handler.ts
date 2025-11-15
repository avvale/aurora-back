import { Pagination } from '@api/graphql';
import { SupportPaginateConfigsQuery } from '@app/support/config';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportPaginateConfigsHandler {
    constructor(private readonly queryBus: IQueryBus) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination> {
        return await this.queryBus.ask(
            new SupportPaginateConfigsQuery(queryStatement, constraint, {
                timezone,
            }),
        );
    }
}
