import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingGetHttpCommunicationsHandler } from '../handlers/auditing-get-http-communications.handler';
import { AuditingHttpCommunication } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingGetHttpCommunicationsResolver
{
    constructor(
        private readonly handler: AuditingGetHttpCommunicationsHandler,
    ) {}

    @Query('auditingGetHttpCommunications')
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