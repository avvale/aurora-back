import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateHttpCommunicationByIdHandler } from '../handlers/auditing-update-http-communication-by-id.handler';
import { AuditingHttpCommunication, AuditingUpdateHttpCommunicationByIdInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateHttpCommunicationByIdResolver
{
    constructor(
        private readonly handler: AuditingUpdateHttpCommunicationByIdHandler,
    ) {}

    @Mutation('auditingUpdateHttpCommunicationById')
    async main(
        @Args('payload') payload: AuditingUpdateHttpCommunicationByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingHttpCommunication>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}