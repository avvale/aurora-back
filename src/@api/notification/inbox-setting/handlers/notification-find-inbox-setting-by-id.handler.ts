import { NotificationInboxSetting } from '@api/graphql';
import { NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationFindInboxSettingByIdQuery } from '@app/notification/inbox-setting';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindInboxSettingByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        return await this.queryBus.ask(new NotificationFindInboxSettingByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
