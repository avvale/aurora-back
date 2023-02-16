import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateSideEffectHandler } from '../handlers/auditing-create-side-effect.handler';
import { AuditingSideEffect, AuditingCreateSideEffectInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateSideEffectResolver
{
    constructor(
        private readonly handler: AuditingCreateSideEffectHandler,
    ) {}

    @Mutation('auditingCreateSideEffect')
    async main(
        @Args('payload') payload: AuditingCreateSideEffectInput,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}