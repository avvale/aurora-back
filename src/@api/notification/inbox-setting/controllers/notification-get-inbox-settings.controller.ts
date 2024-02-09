/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationGetInboxSettingsHandler, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] inbox-setting')
@Controller('notification/inbox-settings/get')
@Auth('notification.inboxSetting.get')
export class NotificationGetInboxSettingsController
{
    constructor(
        private readonly handler: NotificationGetInboxSettingsHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get inbox-settings according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [NotificationInboxSettingDto]})
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
