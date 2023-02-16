import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingPaginateHttpCommunicationsHandler } from '../handlers/auditing-paginate-http-communications.handler';
import { Pagination } from '@api/graphql';

@Resolver()
@Permissions('auditing.httpCommunication.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingPaginateHttpCommunicationsResolver
{
    constructor(
        private readonly handler: AuditingPaginateHttpCommunicationsHandler,
    ) {}

    @Query('auditingPaginateHttpCommunications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}