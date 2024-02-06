/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationByIdDto, NotificationUpsertOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/upsert')
@Auth('notification.outBoxNotification.upsert')
export class NotificationUpsertOutBoxNotificationController
{
    constructor(
        private readonly handler: NotificationUpsertOutBoxNotificationHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert out-box-notification' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: NotificationOutBoxNotificationDto })
    async main(
        @Body() payload: NotificationUpdateOutBoxNotificationByIdDto,
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
