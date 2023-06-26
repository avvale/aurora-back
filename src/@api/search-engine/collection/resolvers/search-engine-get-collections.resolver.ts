import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineGetCollectionsHandler } from '../handlers/search-engine-get-collections.handler';
import { SearchEngineCollection } from '@api/graphql';

@Resolver()
@Auth('searchEngine.collection.get')
export class SearchEngineGetCollectionsResolver
{
    constructor(
        private readonly handler: SearchEngineGetCollectionsHandler,
    ) {}

    @Query('searchEngineGetCollections')
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