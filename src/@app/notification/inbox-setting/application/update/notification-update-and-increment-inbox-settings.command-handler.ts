/* eslint-disable key-spacing */
import { NotificationUpdateAndIncrementInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateAndIncrementInboxSettingsService } from '@app/notification/inbox-setting/application/update/notification-update-and-increment-inbox-settings.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpdateAndIncrementInboxSettingsCommand)
export class NotificationUpdateAndIncrementInboxSettingsCommandHandler implements ICommandHandler<NotificationUpdateAndIncrementInboxSettingsCommand>
{
    constructor(
        private readonly updateInboxSettingsService: NotificationUpdateAndIncrementInboxSettingsService,
    ) {}

    async execute(command: NotificationUpdateAndIncrementInboxSettingsCommand): Promise<void>
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
