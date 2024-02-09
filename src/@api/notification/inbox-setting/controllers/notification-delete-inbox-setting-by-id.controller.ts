/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationDeleteInboxSettingByIdHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-setting/delete')
@Auth('notification.inboxSetting.delete')
export class NotificationDeleteInboxSettingByIdController
{
    constructor(
        private readonly handler: NotificationDeleteInboxSettingByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete inbox-setting by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: NotificationInboxSettingDto })
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
