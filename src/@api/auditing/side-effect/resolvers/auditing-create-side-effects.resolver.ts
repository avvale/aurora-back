import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateSideEffectsHandler } from '../handlers/auditing-create-side-effects.handler';
import { AuditingCreateSideEffectInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateSideEffectsResolver
{
    constructor(
        private readonly handler: AuditingCreateSideEffectsHandler,
    ) {}

    @Mutation('auditingCreateSideEffects')
    async main(
        @Args('payload') payload: AuditingCreateSideEffectInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}