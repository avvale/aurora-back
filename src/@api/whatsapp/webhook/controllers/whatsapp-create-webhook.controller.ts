/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappCreateWebhookDto, WhatsappCreateWebhookHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhook/create')
@Auth('whatsapp.webhook.create')
export class WhatsappCreateWebhookController
{
    constructor(
        private readonly handler: WhatsappCreateWebhookHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create webhook' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: WhatsappWebhookDto })
    async main(
        @Body() payload: WhatsappCreateWebhookDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
