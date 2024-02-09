/* eslint-disable key-spacing */
import { NotificationCreateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationCreateInboxSettingsService } from '@app/notification/inbox-setting/application/create/notification-create-inbox-settings.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationCreateInboxSettingsCommand)
export class NotificationCreateInboxSettingsCommandHandler implements ICommandHandler<NotificationCreateInboxSettingsCommand>
{
    constructor(
        private readonly createInboxSettingsService: NotificationCreateInboxSettingsService,
    ) {}

    async execute(command: NotificationCreateInboxSettingsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createInboxSettingsService.main(
            command.payload
                .map(inboxSetting =>
                {
                    return {
                        id: new NotificationInboxSettingId(inboxSetting.id),
                        accountId: new NotificationInboxSettingAccountId(inboxSetting.accountId),
                        sort: new NotificationInboxSettingSort(inboxSetting.sort),
                    };
                }),
            command.cQMetadata,
        );
    }
}
