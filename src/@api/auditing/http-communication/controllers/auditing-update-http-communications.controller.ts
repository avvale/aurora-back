/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingHttpCommunicationDto, AuditingUpdateHttpCommunicationsDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateHttpCommunicationsHandler } from '../handlers/auditing-update-http-communications.handler';

@ApiTags('[auditing] http-communication')
@Controller('auditing/http-communications/update')
@Permissions('auditing.httpCommunication.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateHttpCommunicationsController
{
    constructor(
        private readonly handler: AuditingUpdateHttpCommunicationsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update http-communications' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AuditingHttpCommunicationDto })
    async main(
        @Body() payload: AuditingUpdateHttpCommunicationsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}