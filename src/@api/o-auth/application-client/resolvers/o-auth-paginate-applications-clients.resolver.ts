import { Pagination } from '@api/graphql';
import { OAuthPaginateApplicationsClientsHandler } from '@api/o-auth/application-client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthPaginateApplicationsClientsResolver
{
    constructor(
        private readonly handler: OAuthPaginateApplicationsClientsHandler,
    ) {}

    @Query('oAuthPaginateApplicationsClients')
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
