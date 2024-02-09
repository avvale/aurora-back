import { NotificationCreateInboxSettingInput, NotificationInboxSetting } from '@api/graphql';
import { NotificationCreateInboxSettingDto, NotificationInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationCreateInboxSettingCommand, NotificationFindInboxSettingByIdQuery } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateInboxSettingHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationCreateInboxSettingInput | NotificationCreateInboxSettingDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting | NotificationInboxSettingDto>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxSettingCommand(
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
