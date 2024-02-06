/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationDeleteOutBoxNotificationsHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notifications/delete')
@Auth('notification.outBoxNotification.delete')
export class NotificationDeleteOutBoxNotificationsController
{
    constructor(
        private readonly handler: NotificationDeleteOutBoxNotificationsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete out-box-notifications in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [NotificationOutBoxNotificationDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
