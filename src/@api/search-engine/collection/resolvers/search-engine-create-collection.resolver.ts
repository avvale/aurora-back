import { SearchEngineCreateCollectionHandler } from '../handlers/search-engine-create-collection.handler';
import { SearchEngineCollection, SearchEngineCreateCollectionInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionResolver
{
    constructor(
        private readonly handler: SearchEngineCreateCollectionHandler,
    ) {}

    @Mutation('searchEngineCreateCollection')
    async main(
        @Args('payload') payload: SearchEngineCreateCollectionInput,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}