import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineGetFieldsHandler } from '../handlers/search-engine-get-fields.handler';
import { SearchEngineField } from '@api/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEngineGetFieldsResolver
{
    constructor(
        private readonly handler: SearchEngineGetFieldsHandler,
    ) {}

    @Query('searchEngineGetFields')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}