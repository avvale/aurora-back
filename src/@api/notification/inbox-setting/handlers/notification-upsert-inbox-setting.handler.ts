import { NotificationInboxSetting, NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationInboxSettingDto, NotificationUpdateInboxSettingByIdDto } from '@api/notification/inbox-setting';
import { NotificationFindInboxSettingByIdQuery, NotificationUpsertInboxSettingCommand } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpsertInboxSettingHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateInboxSettingByIdInput | NotificationUpdateInboxSettingByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        await this.commandBus.dispatch(new NotificationUpsertInboxSettingCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindInboxSettingByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
