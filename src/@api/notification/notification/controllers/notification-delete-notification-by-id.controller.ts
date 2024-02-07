/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantConstraint } from '@api/iam/shared';
import { NotificationDeleteNotificationByIdHandler, NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notification/delete')
@Auth('notification.notification.delete')
export class NotificationDeleteNotificationByIdController
{
    constructor(
        private readonly handler: NotificationDeleteNotificationByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete notification by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: NotificationNotificationDto })
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
