/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutboxDto, NotificationUpdateOutboxByIdDto, NotificationUpsertOutboxHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outbox/upsert')
@Auth('notification.outbox.upsert')
export class NotificationUpsertOutboxController
{
    constructor(
        private readonly handler: NotificationUpsertOutboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert outbox' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: NotificationOutboxDto })
    async main(
        @Body() payload: NotificationUpdateOutboxByIdDto,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
