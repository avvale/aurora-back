/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantConstraint } from '@api/iam/shared';
import { NotificationDeleteNotificationsHandler, NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notifications/delete')
@Auth('notification.notification.delete')
export class NotificationDeleteNotificationsController
{
    constructor(
        private readonly handler: NotificationDeleteNotificationsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete notifications in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [NotificationNotificationDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
