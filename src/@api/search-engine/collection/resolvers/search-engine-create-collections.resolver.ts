import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineCreateCollectionsHandler } from '../handlers/search-engine-create-collections.handler';
import { SearchEngineCreateCollectionInput } from '@api/graphql';

@Resolver()
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionsResolver
{
    constructor(
        private readonly handler: SearchEngineCreateCollectionsHandler,
    ) {}

    @Mutation('searchEngineCreateCollections')
    async main(
        @Args('payload') payload: SearchEngineCreateCollectionInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}