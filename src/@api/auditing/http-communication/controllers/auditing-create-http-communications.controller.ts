/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Timezone } from '@aurora-ts/core';
import { AuditingHttpCommunicationDto, AuditingCreateHttpCommunicationDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingCreateHttpCommunicationsHandler } from '../handlers/auditing-create-http-communications.handler';

@ApiTags('[auditing] http-communication')
@Controller('auditing/http-communications/create')
@Permissions('auditing.httpCommunication.create')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingCreateHttpCommunicationsController
{
    constructor(
        private readonly handler: AuditingCreateHttpCommunicationsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create http-communications in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [AuditingHttpCommunicationDto]})
    @ApiBody({ type: [AuditingCreateHttpCommunicationDto]})
    async main(
        @Body() payload: AuditingCreateHttpCommunicationDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}