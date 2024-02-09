/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationCreateInboxDto, NotificationCreateInboxHandler, NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox')
@Controller('notification/inbox/create')
@Auth('notification.inbox.create')
export class NotificationCreateInboxController
{
    constructor(
        private readonly handler: NotificationCreateInboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create inbox' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: NotificationInboxDto })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationCreateInboxDto,
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
