import { NotificationInboxSetting } from '@api/graphql';
import { NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationDeleteInboxSettingByIdCommand, NotificationFindInboxSettingByIdQuery } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteInboxSettingByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        const inboxSetting = await this.queryBus.ask(new NotificationFindInboxSettingByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteInboxSettingByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return inboxSetting;
    }
}
