import { SearchEngineCollectionDto } from '../dto';
import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineGetCollectionsQuery } from '@app/search-engine/collection';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineGetCollectionsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineCollection[] | SearchEngineCollectionDto[]>
    {
        return await this.queryBus.ask(new SearchEngineGetCollectionsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}