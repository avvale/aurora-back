/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { OAuthApplicationClientDto, OAuthDeleteApplicationClientByIdHandler } from '@api/o-auth/application-client';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[o-auth] application-client')
@Controller('o-auth/application-client/delete')
export class OAuthDeleteApplicationClientByIdController
{
    constructor(
        private readonly handler: OAuthDeleteApplicationClientByIdHandler,
    ) {}

    @Delete(':applicationId/:clientId')
    @ApiOperation({ summary: 'Delete application-client by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: OAuthApplicationClientDto })
    async main(
        @Param('applicationId') applicationId: string,
        @Param('clientId') clientId: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            applicationId,
            clientId,
            constraint,
            timezone,
        );
    }
}
