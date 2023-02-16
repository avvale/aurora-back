import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingDeleteSideEffectsHandler } from '../handlers/auditing-delete-side-effects.handler';
import { AuditingSideEffect } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.delete')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingDeleteSideEffectsResolver
{
    constructor(
        private readonly handler: AuditingDeleteSideEffectsHandler,
    ) {}

    @Mutation('auditingDeleteSideEffects')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}