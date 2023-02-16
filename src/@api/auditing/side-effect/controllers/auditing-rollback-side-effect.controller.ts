/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingUpdateSideEffectByIdDto } from '../dto';

// auditing
import { Auditing } from '@api/auditing/shared/decorators/auditing.decorator';
import { AuditingMeta } from '@api/auditing/auditing.types';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingRollbackSideEffectHandler } from '../handlers/auditing-rollback-side-effect.handler';

@ApiTags('[auditing] side-effect')
@Controller('auditing/side-effect/rollback')
@Permissions('auditing.sideEffect.rollback')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingRollbackSideEffectController
{
    constructor(
        private readonly handler: AuditingRollbackSideEffectHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: Boolean })
    async main(
        @Body() payload: AuditingUpdateSideEffectByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}