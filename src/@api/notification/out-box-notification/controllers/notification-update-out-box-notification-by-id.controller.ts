/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationByIdDto, NotificationUpdateOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/update')
@Auth('notification.outBoxNotification.update')
export class NotificationUpdateOutBoxNotificationByIdController
{
    constructor(
        private readonly handler: NotificationUpdateOutBoxNotificationByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update out-box-notification by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationOutBoxNotificationDto })
    async main(
        @Body() payload: NotificationUpdateOutBoxNotificationByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
