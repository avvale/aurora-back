import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonPaginateResourcesHandler } from '../handlers/common-paginate-resources.handler';
import { Pagination } from '@api/graphql';

@Resolver()
@Auth('common.resource.get')
export class CommonPaginateResourcesResolver
{
    constructor(
        private readonly handler: CommonPaginateResourcesHandler,
    ) {}

    @Query('commonPaginateResources')
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