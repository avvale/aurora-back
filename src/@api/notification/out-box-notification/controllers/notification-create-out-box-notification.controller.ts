/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateOutBoxNotificationDto, NotificationCreateOutBoxNotificationHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/create')
@Auth('notification.outBoxNotification.create')
export class NotificationCreateOutBoxNotificationController
{
    constructor(
        private readonly handler: NotificationCreateOutBoxNotificationHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create out-box-notification' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: NotificationOutBoxNotificationDto })
    async main(
        @Body() payload: NotificationCreateOutBoxNotificationDto,
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
