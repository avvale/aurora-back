/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateOutBoxNotificationDto, NotificationCreateOutBoxNotificationsHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notifications/create')
@Auth('notification.outBoxNotification.create')
export class NotificationCreateOutBoxNotificationsController
{
    constructor(
        private readonly handler: NotificationCreateOutBoxNotificationsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create out-box-notifications in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [NotificationOutBoxNotificationDto]})
    @ApiBody({ type: [NotificationCreateOutBoxNotificationDto]})
    async main(
        @Body() payload: NotificationCreateOutBoxNotificationDto[],
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
