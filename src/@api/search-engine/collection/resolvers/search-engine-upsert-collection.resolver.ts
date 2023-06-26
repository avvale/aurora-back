import { SearchEngineUpsertCollectionHandler } from '../handlers/search-engine-upsert-collection.handler';
import { SearchEngineCollection, SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.upsert')
export class SearchEngineUpsertCollectionResolver
{
    constructor(
        private readonly handler: SearchEngineUpsertCollectionHandler,
    ) {}

    @Mutation('searchEngineUpsertCollection')
    async main(
        @Args('payload') payload: SearchEngineUpdateCollectionByIdInput,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}