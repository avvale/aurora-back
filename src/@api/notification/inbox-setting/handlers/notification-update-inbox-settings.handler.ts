import { NotificationInboxSetting, NotificationUpdateInboxSettingsInput } from '@api/graphql';
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingsDto } from '@api/notification/inbox-setting';
import { NotificationGetInboxSettingsQuery, NotificationUpdateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateInboxSettingsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateInboxSettingsInput | NotificationUpdateInboxSettingsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        await this.commandBus.dispatch(new NotificationUpdateInboxSettingsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationGetInboxSettingsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
