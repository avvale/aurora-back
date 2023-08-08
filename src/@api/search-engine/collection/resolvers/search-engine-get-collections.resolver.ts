import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineGetCollectionsHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

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
