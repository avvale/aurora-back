import { OAuthApplicationClient, OAuthCreateApplicationClientInput } from '@api/graphql';
import { OAuthCreateApplicationClientHandler } from '@api/o-auth/application-client';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthCreateApplicationClientResolver
{
    constructor(
        private readonly handler: OAuthCreateApplicationClientHandler,
    ) {}

    @Mutation('oAuthCreateApplicationClient')
    async main(
        @Args('payload') payload: OAuthCreateApplicationClientInput,
        @Timezone() timezone?: string,
    ): Promise<OAuthApplicationClient>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
