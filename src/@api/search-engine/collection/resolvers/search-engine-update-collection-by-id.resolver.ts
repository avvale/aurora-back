import { SearchEngineUpdateCollectionByIdHandler } from '../handlers/search-engine-update-collection-by-id.handler';
import { SearchEngineCollection, SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.update')
export class SearchEngineUpdateCollectionByIdResolver
{
    constructor(
        private readonly handler: SearchEngineUpdateCollectionByIdHandler,
    ) {}

    @Mutation('searchEngineUpdateCollectionById')
    async main(
        @Args('payload') payload: SearchEngineUpdateCollectionByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}