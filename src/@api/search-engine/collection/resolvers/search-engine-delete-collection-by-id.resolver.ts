import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteCollectionByIdHandler } from '../handlers/search-engine-delete-collection-by-id.handler';
import { SearchEngineCollection } from '@api/graphql';

@Resolver()
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionByIdResolver
{
    constructor(
        private readonly handler: SearchEngineDeleteCollectionByIdHandler,
    ) {}

    @Mutation('searchEngineDeleteCollectionById')
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