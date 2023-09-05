import { OAuthApplicationClient } from '@api/graphql';
import { OAuthDeleteApplicationClientByIdHandler } from '@api/o-auth/application-client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class OAuthDeleteApplicationClientByIdResolver
{
    constructor(
        private readonly handler: OAuthDeleteApplicationClientByIdHandler,
    ) {}

    @Mutation('oAuthDeleteApplicationClientById')
    async main(
        @Args('applicationId') applicationId: string,
        @Args('clientId') clientId: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<OAuthApplicationClient>
    {
        return await this.handler.main(
            applicationId,
            clientId,
            constraint,
            timezone,
        );
    }
}
