/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationFindInboxSettingByIdHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-setting/find')
@Auth('notification.inboxSetting.get')
export class NotificationFindInboxSettingByIdController
{
    constructor(
        private readonly handler: NotificationFindInboxSettingByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find inbox-setting by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: NotificationInboxSettingDto })
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
