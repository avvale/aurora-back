import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingFindSideEffectHandler } from '../handlers/auditing-find-side-effect.handler';
import { AuditingSideEffect } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingFindSideEffectResolver
{
    constructor(
        private readonly handler: AuditingFindSideEffectHandler,
    ) {}

    @Query('auditingFindSideEffect')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}