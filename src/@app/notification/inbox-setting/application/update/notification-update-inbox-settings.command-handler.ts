/* eslint-disable key-spacing */
import { NotificationUpdateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingsService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-settings.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpdateInboxSettingsCommand)
export class NotificationUpdateInboxSettingsCommandHandler implements ICommandHandler<NotificationUpdateInboxSettingsCommand>
{
    constructor(
        private readonly updateInboxSettingsService: NotificationUpdateInboxSettingsService,
    ) {}

    async execute(command: NotificationUpdateInboxSettingsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInboxSettingsService.main(
            {
                id: new NotificationInboxSettingId(command.payload.id, { undefinable: true }),
                accountId: new NotificationInboxSettingAccountId(command.payload.accountId, { undefinable: true }),
                sort: new NotificationInboxSettingSort(command.payload.sort, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
