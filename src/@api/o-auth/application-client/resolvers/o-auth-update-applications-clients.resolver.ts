import { OAuthApplicationClient, OAuthUpdateApplicationsClientsInput } from '@api/graphql';
import { OAuthUpdateApplicationsClientsHandler } from '@api/o-auth/application-client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthUpdateApplicationsClientsResolver
{
    constructor(
        private readonly handler: OAuthUpdateApplicationsClientsHandler,
    ) {}

    @Mutation('oAuthUpdateApplicationsClients')
    async main(
        @Args('payload') payload: OAuthUpdateApplicationsClientsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<OAuthApplicationClient>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
