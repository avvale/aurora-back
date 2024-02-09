import { NotificationInboxSetting } from '@api/graphql';
import { NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationGetInboxSettingsQuery } from '@app/notification/inbox-setting';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationGetInboxSettingsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationInboxSetting[] | NotificationInboxSettingDto[]>
    {
        return await this.queryBus.ask(new NotificationGetInboxSettingsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
