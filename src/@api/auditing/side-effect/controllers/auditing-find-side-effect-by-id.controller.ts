/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingSideEffectDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingFindSideEffectByIdHandler } from '../handlers/auditing-find-side-effect-by-id.handler';

@ApiTags('[auditing] side-effect')
@Controller('auditing/side-effect/find')
@Permissions('auditing.sideEffect.get')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingFindSideEffectByIdController
{
    constructor(
        private readonly handler: AuditingFindSideEffectByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find side-effect by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: AuditingSideEffectDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}