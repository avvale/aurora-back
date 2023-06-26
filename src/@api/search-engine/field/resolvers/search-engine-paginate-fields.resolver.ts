import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEnginePaginateFieldsHandler } from '../handlers/search-engine-paginate-fields.handler';
import { Pagination } from '@api/graphql';

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