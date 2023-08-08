import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineCollectionDto } from '@api/search-engine/collection';
import { SearchEngineTypesenseImplementationService } from '@api/search-engine/shared';
import { SearchEngineDeleteCollectionByIdCommand, SearchEngineFindCollectionByIdQuery } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineDeleteCollectionByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly searchEngineService: SearchEngineTypesenseImplementationService,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineCollection | SearchEngineCollectionDto>
    {
        const collection = await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new SearchEngineDeleteCollectionByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        // ---- customizations ----
        this.searchEngineService.delete(collection.name);

        return collection;
    }
}
