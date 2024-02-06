/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationFindOutBoxNotificationByIdHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/find')
@Auth('notification.outBoxNotification.get')
export class NotificationFindOutBoxNotificationByIdController
{
    constructor(
        private readonly handler: NotificationFindOutBoxNotificationByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find out-box-notification by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: NotificationOutBoxNotificationDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
