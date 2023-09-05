/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { OAuthApplicationClientDto, OAuthCreateApplicationClientDto, OAuthCreateApplicationsClientsHandler } from '@api/o-auth/application-client';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[o-auth] application-client')
@Controller('o-auth/applications-clients/create')
export class OAuthCreateApplicationsClientsController
{
    constructor(
        private readonly handler: OAuthCreateApplicationsClientsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create applications-clients in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [OAuthApplicationClientDto]})
    @ApiBody({ type: [OAuthCreateApplicationClientDto]})
    async main(
        @Body() payload: OAuthCreateApplicationClientDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
