/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationNotificationDto, NotificationUpdateNotificationsDto, NotificationUpdateNotificationsHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notifications/update')
@Auth('notification.notification.update')
export class NotificationUpdateNotificationsController
{
    constructor(
        private readonly handler: NotificationUpdateNotificationsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update notifications' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationNotificationDto })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationUpdateNotificationsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
