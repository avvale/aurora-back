import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteCollectionsHandler } from '../handlers/search-engine-delete-collections.handler';
import { SearchEngineCollection } from '@api/graphql';

@Resolver()
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionsResolver
{
    constructor(
        private readonly handler: SearchEngineDeleteCollectionsHandler,
    ) {}

    @Mutation('searchEngineDeleteCollections')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}