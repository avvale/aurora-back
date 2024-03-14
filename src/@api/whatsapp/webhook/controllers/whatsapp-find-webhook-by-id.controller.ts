/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappFindWebhookByIdHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhook/find')
@Auth('whatsapp.webhook.get')
export class WhatsappFindWebhookByIdController
{
    constructor(
        private readonly handler: WhatsappFindWebhookByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find webhook by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: WhatsappWebhookDto })
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
