import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateHttpCommunicationsHandler } from '../handlers/auditing-create-http-communications.handler';
import { AuditingCreateHttpCommunicationInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateHttpCommunicationsResolver
{
    constructor(
        private readonly handler: AuditingCreateHttpCommunicationsHandler,
    ) {}

    @Mutation('auditingCreateHttpCommunications')
    async main(
        @Args('payload') payload: AuditingCreateHttpCommunicationInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}