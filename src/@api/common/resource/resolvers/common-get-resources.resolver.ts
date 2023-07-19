import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonGetResourcesHandler } from '../handlers/common-get-resources.handler';
import { CommonResource } from '@api/graphql';

@Resolver()
@Auth('common.resource.get')
export class CommonGetResourcesResolver
{
    constructor(
        private readonly handler: CommonGetResourcesHandler,
    ) {}

    @Query('commonGetResources')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonResource[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}