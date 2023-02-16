import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingDeleteHttpCommunicationsHandler } from '../handlers/auditing-delete-http-communications.handler';
import { AuditingHttpCommunication } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.delete')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingDeleteHttpCommunicationsResolver
{
    constructor(
        private readonly handler: AuditingDeleteHttpCommunicationsHandler,
    ) {}

    @Mutation('auditingDeleteHttpCommunications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingHttpCommunication[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}