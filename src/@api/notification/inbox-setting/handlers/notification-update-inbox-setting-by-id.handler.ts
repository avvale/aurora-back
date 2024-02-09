import { NotificationInboxSetting, NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingByIdDto } from '@api/notification/inbox-setting';
import { NotificationFindInboxSettingByIdQuery, NotificationUpdateInboxSettingByIdCommand } from '@app/notification/inbox-setting';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateInboxSettingByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateInboxSettingByIdInput | NotificationUpdateInboxSettingByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        const inboxSetting = await this.queryBus.ask(new NotificationFindInboxSettingByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, inboxSetting);

        await this.commandBus.dispatch(new NotificationUpdateInboxSettingByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindInboxSettingByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
