/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationCreateInboxDto, NotificationCreateInboxesHandler, NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox')
@Controller('notification/inboxes/create')
@Auth('notification.inbox.create')
export class NotificationCreateInboxesController
{
    constructor(
        private readonly handler: NotificationCreateInboxesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create inboxes in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [NotificationInboxDto]})
    @ApiBody({ type: [NotificationCreateInboxDto]})
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationCreateInboxDto[],
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
