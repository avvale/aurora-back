/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCheckNotificationsInboxHandler } from '../handlers/notification-check-notifications-inbox.handler';
import { TenantPolicy } from '@api/iam/shared';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox')
@Controller('notification/inbox/check-notifications')
@Auth('notification.inbox.update')
export class NotificationCheckNotificationsInboxController
{
    constructor(
        private readonly handler: NotificationCheckNotificationsInboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: Boolean })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body('query') query?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            query,
            timezone,
            auditing,
        );
    }
}