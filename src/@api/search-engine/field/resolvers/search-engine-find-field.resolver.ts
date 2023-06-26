import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineFindFieldHandler } from '../handlers/search-engine-find-field.handler';
import { SearchEngineField } from '@api/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEngineFindFieldResolver
{
    constructor(
        private readonly handler: SearchEngineFindFieldHandler,
    ) {}

    @Query('searchEngineFindField')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}