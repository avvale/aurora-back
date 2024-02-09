/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingsDto, NotificationUpdateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-settings/update')
@Auth('notification.inboxSetting.update')
export class NotificationUpdateInboxSettingsController
{
    constructor(
        private readonly handler: NotificationUpdateInboxSettingsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update inbox-settings' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationInboxSettingDto })
    async main(
        @Body() payload: NotificationUpdateInboxSettingsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
