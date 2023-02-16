import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpsertSideEffectHandler } from '../handlers/auditing-upsert-side-effect.handler';
import { AuditingSideEffect, AuditingUpdateSideEffectByIdInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.upsert')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpsertSideEffectResolver
{
    constructor(
        private readonly handler: AuditingUpsertSideEffectHandler,
    ) {}

    @Mutation('auditingUpsertSideEffect')
    async main(
        @Args('payload') payload: AuditingUpdateSideEffectByIdInput,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}