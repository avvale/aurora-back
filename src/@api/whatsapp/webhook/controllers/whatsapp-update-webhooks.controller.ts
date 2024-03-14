/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappUpdateWebhooksDto, WhatsappUpdateWebhooksHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhooks/update')
@Auth('whatsapp.webhook.update')
export class WhatsappUpdateWebhooksController
{
    constructor(
        private readonly handler: WhatsappUpdateWebhooksHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update webhooks' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: WhatsappWebhookDto })
    async main(
        @Body() payload: WhatsappUpdateWebhooksDto,
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
