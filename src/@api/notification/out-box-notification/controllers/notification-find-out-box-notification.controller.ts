/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationFindOutBoxNotificationHandler, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] out-box-notification')
@Controller('notification/out-box-notification/find')
@Auth('notification.outBoxNotification.get')
export class NotificationFindOutBoxNotificationController
{
    constructor(
        private readonly handler: NotificationFindOutBoxNotificationHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find out-box-notification according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: NotificationOutBoxNotificationDto })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
