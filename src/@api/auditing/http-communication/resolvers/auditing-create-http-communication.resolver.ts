import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateHttpCommunicationHandler } from '../handlers/auditing-create-http-communication.handler';
import { AuditingHttpCommunication, AuditingCreateHttpCommunicationInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateHttpCommunicationResolver
{
    constructor(
        private readonly handler: AuditingCreateHttpCommunicationHandler,
    ) {}

    @Mutation('auditingCreateHttpCommunication')
    async main(
        @Args('payload') payload: AuditingCreateHttpCommunicationInput,
        @Timezone() timezone?: string,
    ): Promise<AuditingHttpCommunication>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}