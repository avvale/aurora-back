/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingSideEffectDto, AuditingUpdateSideEffectByIdDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateSideEffectByIdHandler } from '../handlers/auditing-update-side-effect-by-id.handler';

@ApiTags('[auditing] side-effect')
@Controller('auditing/side-effect/update')
@Permissions('auditing.sideEffect.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateSideEffectByIdController
{
    constructor(
        private readonly handler: AuditingUpdateSideEffectByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update side-effect by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AuditingSideEffectDto })
    async main(
        @Body() payload: AuditingUpdateSideEffectByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}