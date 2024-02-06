/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationDeleteOutBoxNotificationByIdHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/delete')
@Auth('notification.outBoxNotification.delete')
export class NotificationDeleteOutBoxNotificationByIdController
{
    constructor(
        private readonly handler: NotificationDeleteOutBoxNotificationByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete out-box-notification by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: NotificationOutBoxNotificationDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
