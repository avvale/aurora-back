import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingFindSideEffectByIdHandler } from '../handlers/auditing-find-side-effect-by-id.handler';
import { AuditingSideEffect } from '@api/graphql';

@Resolver()
@Permissions('auditing.sideEffect.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingFindSideEffectByIdResolver
{
    constructor(
        private readonly handler: AuditingFindSideEffectByIdHandler,
    ) {}

    @Query('auditingFindSideEffectById')
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