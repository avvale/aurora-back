/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateInboxSettingDto, NotificationCreateInboxSettingHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-setting/create')
@Auth('notification.inboxSetting.create')
export class NotificationCreateInboxSettingController
{
    constructor(
        private readonly handler: NotificationCreateInboxSettingHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create inbox-setting' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: NotificationInboxSettingDto })
    async main(
        @Body() payload: NotificationCreateInboxSettingDto,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
