/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingByIdDto, NotificationUpsertInboxSettingHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-setting/upsert')
@Auth('notification.inboxSetting.upsert')
export class NotificationUpsertInboxSettingController
{
    constructor(
        private readonly handler: NotificationUpsertInboxSettingHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert inbox-setting' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: NotificationInboxSettingDto })
    async main(
        @Body() payload: NotificationUpdateInboxSettingByIdDto,
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
