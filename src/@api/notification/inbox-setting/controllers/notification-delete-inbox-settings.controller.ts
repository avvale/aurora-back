/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationDeleteInboxSettingsHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-settings/delete')
@Auth('notification.inboxSetting.delete')
export class NotificationDeleteInboxSettingsController
{
    constructor(
        private readonly handler: NotificationDeleteInboxSettingsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete inbox-settings in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [NotificationInboxSettingDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
