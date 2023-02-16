/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingHttpCommunicationDto, AuditingUpdateHttpCommunicationByIdDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingUpdateHttpCommunicationByIdHandler } from '../handlers/auditing-update-http-communication-by-id.handler';

@ApiTags('[auditing] http-communication')
@Controller('auditing/http-communication/update')
@Permissions('auditing.httpCommunication.update')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingUpdateHttpCommunicationByIdController
{
    constructor(
        private readonly handler: AuditingUpdateHttpCommunicationByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update http-communication by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: AuditingHttpCommunicationDto })
    async main(
        @Body() payload: AuditingUpdateHttpCommunicationByIdDto,
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