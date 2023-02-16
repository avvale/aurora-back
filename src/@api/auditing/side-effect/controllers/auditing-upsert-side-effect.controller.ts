/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Timezone } from '@aurora-ts/core';
import { AuditingSideEffectDto, AuditingUpdateSideEffectByIdDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpsertSideEffectHandler } from '../handlers/auditing-upsert-side-effect.handler';

@ApiTags('[auditing] side-effect')
@Controller('auditing/side-effect/upsert')
@Permissions('auditing.sideEffect.upsert')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpsertSideEffectController
{
    constructor(
        private readonly handler: AuditingUpsertSideEffectHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert side-effect' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: AuditingSideEffectDto })
    async main(
        @Body() payload: AuditingUpdateSideEffectByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}