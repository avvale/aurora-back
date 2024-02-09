import { NotificationCreateInboxSettingInput } from '@api/graphql';
import { NotificationCreateInboxSettingDto } from '@api/notification/inbox-setting';
import { NotificationCreateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateInboxSettingsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: NotificationCreateInboxSettingInput[] | NotificationCreateInboxSettingDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxSettingsCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}
