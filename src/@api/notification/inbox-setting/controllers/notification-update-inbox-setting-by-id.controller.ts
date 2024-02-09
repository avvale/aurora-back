/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingByIdDto, NotificationUpdateInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-setting/update')
@Auth('notification.inboxSetting.update')
export class NotificationUpdateInboxSettingByIdController
{
    constructor(
        private readonly handler: NotificationUpdateInboxSettingByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update inbox-setting by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationInboxSettingDto })
    async main(
        @Body() payload: NotificationUpdateInboxSettingByIdDto,
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
