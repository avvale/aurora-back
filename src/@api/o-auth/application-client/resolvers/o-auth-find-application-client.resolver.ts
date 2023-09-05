import { OAuthApplicationClient } from '@api/graphql';
import { OAuthFindApplicationClientHandler } from '@api/o-auth/application-client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthFindApplicationClientResolver
{
    constructor(
        private readonly handler: OAuthFindApplicationClientHandler,
    ) {}

    @Query('oAuthFindApplicationClient')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<OAuthApplicationClient>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
