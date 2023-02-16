/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Timezone } from '@aurora-ts/core';
import { AuditingHttpCommunicationDto, AuditingCreateHttpCommunicationDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateHttpCommunicationHandler } from '../handlers/auditing-create-http-communication.handler';

@ApiTags('[auditing] http-communication')
@Controller('auditing/http-communication/create')
@Permissions('auditing.httpCommunication.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateHttpCommunicationController
{
    constructor(
        private readonly handler: AuditingCreateHttpCommunicationHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create http-communication' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AuditingHttpCommunicationDto })
    async main(
        @Body() payload: AuditingCreateHttpCommunicationDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}