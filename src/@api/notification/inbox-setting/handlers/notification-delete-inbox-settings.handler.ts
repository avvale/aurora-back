import { NotificationInboxSetting } from '@api/graphql';
import { NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationDeleteInboxSettingsCommand, NotificationGetInboxSettingsQuery } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteInboxSettingsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting[] | NotificationInboxSettingDto[]>
    {
        const inboxSettings = await this.queryBus.ask(new NotificationGetInboxSettingsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteInboxSettingsCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return inboxSettings;
    }
}
