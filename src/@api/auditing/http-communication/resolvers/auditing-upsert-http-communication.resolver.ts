import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpsertHttpCommunicationHandler } from '../handlers/auditing-upsert-http-communication.handler';
import { AuditingHttpCommunication, AuditingUpdateHttpCommunicationByIdInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.upsert')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpsertHttpCommunicationResolver
{
    constructor(
        private readonly handler: AuditingUpsertHttpCommunicationHandler,
    ) {}

    @Mutation('auditingUpsertHttpCommunication')
    async main(
        @Args('payload') payload: AuditingUpdateHttpCommunicationByIdInput,
        @Timezone() timezone?: string,
    ): Promise<AuditingHttpCommunication>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}