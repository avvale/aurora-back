import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEnginePaginateCollectionsHandler } from '../handlers/search-engine-paginate-collections.handler';
import { Pagination } from '@api/graphql';

@Resolver()
@Auth('searchEngine.collection.get')
export class SearchEnginePaginateCollectionsResolver
{
    constructor(
        private readonly handler: SearchEnginePaginateCollectionsHandler,
    ) {}

    @Query('searchEnginePaginateCollections')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}