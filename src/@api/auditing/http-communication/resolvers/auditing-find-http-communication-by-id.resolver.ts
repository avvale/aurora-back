import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingFindHttpCommunicationByIdHandler } from '../handlers/auditing-find-http-communication-by-id.handler';
import { AuditingHttpCommunication } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingFindHttpCommunicationByIdResolver
{
    constructor(
        private readonly handler: AuditingFindHttpCommunicationByIdHandler,
    ) {}

    @Query('auditingFindHttpCommunicationById')
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