/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationsDto, NotificationUpdateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notifications/update')
@Auth('notification.outBoxNotification.update')
export class NotificationUpdateOutBoxNotificationsController
{
    constructor(
        private readonly handler: NotificationUpdateOutBoxNotificationsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update out-box-notifications' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationOutBoxNotificationDto })
    async main(
        @Body() payload: NotificationUpdateOutBoxNotificationsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
