import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateSideEffectsHandler } from '../handlers/auditing-update-side-effects.handler';
import { AuditingSideEffect, AuditingUpdateSideEffectsInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateSideEffectsResolver
{
    constructor(
        private readonly handler: AuditingUpdateSideEffectsHandler,
    ) {}

    @Mutation('auditingUpdateSideEffects')
    async main(
        @Args('payload') payload: AuditingUpdateSideEffectsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}