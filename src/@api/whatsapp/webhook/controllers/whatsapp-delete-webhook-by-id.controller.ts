/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { WhatsappDeleteWebhookByIdHandler, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[whatsapp] webhook')
@Controller('whatsapp/webhook/delete')
@Auth('whatsapp.webhook.delete')
export class WhatsappDeleteWebhookByIdController
{
    constructor(
        private readonly handler: WhatsappDeleteWebhookByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete webhook by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: WhatsappWebhookDto })
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
