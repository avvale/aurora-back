import { Pagination } from '@api/graphql';
import { SearchEnginePaginateFieldsQuery } from '@app/search-engine/field';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEnginePaginateFieldsHandler
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
        return await this.queryBus.ask(new SearchEnginePaginateFieldsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}