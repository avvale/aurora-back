import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateSideEffectByIdHandler } from '../handlers/auditing-update-side-effect-by-id.handler';
import { AuditingSideEffect, AuditingUpdateSideEffectByIdInput } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateSideEffectByIdResolver
{
    constructor(
        private readonly handler: AuditingUpdateSideEffectByIdHandler,
    ) {}

    @Mutation('auditingUpdateSideEffectById')
    async main(
        @Args('payload') payload: AuditingUpdateSideEffectByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}