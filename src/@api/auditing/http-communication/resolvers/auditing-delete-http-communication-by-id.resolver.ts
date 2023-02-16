import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingDeleteHttpCommunicationByIdHandler } from '../handlers/auditing-delete-http-communication-by-id.handler';
import { AuditingHttpCommunication } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.delete')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingDeleteHttpCommunicationByIdResolver
{
    constructor(
        private readonly handler: AuditingDeleteHttpCommunicationByIdHandler,
    ) {}

    @Mutation('auditingDeleteHttpCommunicationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingHttpCommunication>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}