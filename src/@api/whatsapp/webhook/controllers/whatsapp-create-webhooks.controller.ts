/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappCreateWebhookDto, WhatsappCreateWebhooksHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhooks/create')
@Auth('whatsapp.webhook.create')
export class WhatsappCreateWebhooksController
{
    constructor(
        private readonly handler: WhatsappCreateWebhooksHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create webhooks in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [WhatsappWebhookDto]})
    @ApiBody({ type: [WhatsappCreateWebhookDto]})
    async main(
        @Body() payload: WhatsappCreateWebhookDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
