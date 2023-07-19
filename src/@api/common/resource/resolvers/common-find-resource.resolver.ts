import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonFindResourceHandler } from '../handlers/common-find-resource.handler';
import { CommonResource } from '@api/graphql';

@Resolver()
@Auth('common.resource.get')
export class CommonFindResourceResolver
{
    constructor(
        private readonly handler: CommonFindResourceHandler,
    ) {}

    @Query('commonFindResource')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonResource>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}