import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineFindCollectionHandler } from '../handlers/search-engine-find-collection.handler';
import { SearchEngineCollection } from '@api/graphql';

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