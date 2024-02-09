/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateInboxSettingDto, NotificationCreateInboxSettingsHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-settings/create')
@Auth('notification.inboxSetting.create')
export class NotificationCreateInboxSettingsController
{
    constructor(
        private readonly handler: NotificationCreateInboxSettingsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create inbox-settings in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [NotificationInboxSettingDto]})
    @ApiBody({ type: [NotificationCreateInboxSettingDto]})
    async main(
        @Body() payload: NotificationCreateInboxSettingDto[],
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
