/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappUpdateWebhookByIdDto, WhatsappUpsertWebhookHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhook/upsert')
@Auth('whatsapp.webhook.upsert')
export class WhatsappUpsertWebhookController
{
    constructor(
        private readonly handler: WhatsappUpsertWebhookHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert webhook' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: WhatsappWebhookDto })
    async main(
        @Body() payload: WhatsappUpdateWebhookByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
