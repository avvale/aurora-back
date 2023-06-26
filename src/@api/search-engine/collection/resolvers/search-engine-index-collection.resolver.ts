import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineIndexCollectionHandler } from '../handlers/search-engine-index-collection.handler';

@Resolver()
@Auth('searchEngine.collection.update')
export class SearchEngineIndexCollectionResolver
{
    constructor(
        private readonly handler: SearchEngineIndexCollectionHandler,
    ) {}

    @Mutation('searchEngineIndexCollection')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}