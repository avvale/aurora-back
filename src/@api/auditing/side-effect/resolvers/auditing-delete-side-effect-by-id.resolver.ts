import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingDeleteSideEffectByIdHandler } from '../handlers/auditing-delete-side-effect-by-id.handler';
import { AuditingSideEffect } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.delete')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingDeleteSideEffectByIdResolver
{
    constructor(
        private readonly handler: AuditingDeleteSideEffectByIdHandler,
    ) {}

    @Mutation('auditingDeleteSideEffectById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<AuditingSideEffect>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}