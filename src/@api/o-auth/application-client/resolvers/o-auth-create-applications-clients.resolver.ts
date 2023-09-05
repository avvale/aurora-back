import { OAuthCreateApplicationClientInput } from '@api/graphql';
import { OAuthCreateApplicationsClientsHandler } from '@api/o-auth/application-client';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthCreateApplicationsClientsResolver
{
    constructor(
        private readonly handler: OAuthCreateApplicationsClientsHandler,
    ) {}

    @Mutation('oAuthCreateApplicationsClients')
    async main(
        @Args('payload') payload: OAuthCreateApplicationClientInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
