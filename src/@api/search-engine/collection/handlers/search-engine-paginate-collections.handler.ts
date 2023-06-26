import { Pagination } from '@api/graphql';
import { SearchEnginePaginateCollectionsQuery } from '@app/search-engine/collection';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEnginePaginateCollectionsHandler
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
        return await this.queryBus.ask(new SearchEnginePaginateCollectionsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}