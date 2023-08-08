import { Pagination } from '@api/graphql';
import { SearchEnginePaginateFieldsHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEnginePaginateFieldsResolver
{
    constructor(
        private readonly handler: SearchEnginePaginateFieldsHandler,
    ) {}

    @Query('searchEnginePaginateFields')
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
