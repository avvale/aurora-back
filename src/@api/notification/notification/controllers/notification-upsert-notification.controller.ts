/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationNotificationDto, NotificationUpdateNotificationByIdDto, NotificationUpsertNotificationHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notification/upsert')
@Auth('notification.notification.upsert')
export class NotificationUpsertNotificationController
{
    constructor(
        private readonly handler: NotificationUpsertNotificationHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert notification' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: NotificationNotificationDto })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationUpdateNotificationByIdDto,
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
