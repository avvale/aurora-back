import { SearchEngineFindCollectionByIdHandler } from '../handlers/search-engine-find-collection-by-id.handler';
import { SearchEngineCollection } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.get')
export class SearchEngineFindCollectionByIdResolver
{
    constructor(
        private readonly handler: SearchEngineFindCollectionByIdHandler,
    ) {}

    @Query('searchEngineFindCollectionById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineCollection>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}