/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationCreateNotificationDto, NotificationCreateNotificationsHandler, NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notifications/create')
@Auth('notification.notification.create')
export class NotificationCreateNotificationsController
{
    constructor(
        private readonly handler: NotificationCreateNotificationsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create notifications in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [NotificationNotificationDto]})
    @ApiBody({ type: [NotificationCreateNotificationDto]})
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationCreateNotificationDto[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            payload,
            timezone,
            auditing,
        );
    }
}
