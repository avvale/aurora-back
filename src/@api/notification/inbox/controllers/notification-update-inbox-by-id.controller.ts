/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationInboxDto, NotificationUpdateInboxByIdDto, NotificationUpdateInboxByIdHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox')
@Controller('notification/inbox/update')
@Auth('notification.inbox.update')
export class NotificationUpdateInboxByIdController
{
    constructor(
        private readonly handler: NotificationUpdateInboxByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update inbox by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationInboxDto })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationUpdateInboxByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
