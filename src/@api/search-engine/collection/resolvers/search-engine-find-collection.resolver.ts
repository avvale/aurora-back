import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineFindCollectionHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.get')
export class SearchEngineFindCollectionResolver
{
    constructor(
        private readonly handler: SearchEngineFindCollectionHandler,
    ) {}

    @Query('searchEngineFindCollection')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
