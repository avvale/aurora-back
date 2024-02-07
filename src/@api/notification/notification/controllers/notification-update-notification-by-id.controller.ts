/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantPolicy } from '@api/iam/shared';
import { NotificationNotificationDto, NotificationUpdateNotificationByIdDto, NotificationUpdateNotificationByIdHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notification/update')
@Auth('notification.notification.update')
export class NotificationUpdateNotificationByIdController
{
    constructor(
        private readonly handler: NotificationUpdateNotificationByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update notification by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationNotificationDto })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body() payload: NotificationUpdateNotificationByIdDto,
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
