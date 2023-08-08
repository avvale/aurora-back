import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineCollectionDto } from '@api/search-engine/collection';
import { SearchEngineDeleteCollectionsCommand, SearchEngineGetCollectionsQuery } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineDeleteCollectionsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineCollection[] | SearchEngineCollectionDto[]>
    {
        const collections = await this.queryBus.ask(new SearchEngineGetCollectionsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new SearchEngineDeleteCollectionsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return collections;
    }
}
