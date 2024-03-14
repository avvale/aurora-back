/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappUpdateWebhookByIdDto, WhatsappUpdateWebhookByIdHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhook/update')
@Auth('whatsapp.webhook.update')
export class WhatsappUpdateWebhookByIdController
{
    constructor(
        private readonly handler: WhatsappUpdateWebhookByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update webhook by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: WhatsappWebhookDto })
    async main(
        @Body() payload: WhatsappUpdateWebhookByIdDto,
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
