/* eslint-disable key-spacing */
import { NotificationUpsertInboxSettingCommand } from '@app/notification/inbox-setting';
import { NotificationUpsertInboxSettingService } from '@app/notification/inbox-setting/application/upsert/notification-upsert-inbox-setting.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpsertInboxSettingCommand)
export class NotificationUpsertInboxSettingCommandHandler implements ICommandHandler<NotificationUpsertInboxSettingCommand>
{
    constructor(
        private readonly upsertInboxSettingService: NotificationUpsertInboxSettingService,
    ) {}

    async execute(command: NotificationUpsertInboxSettingCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertInboxSettingService.main(
            {
                id: new NotificationInboxSettingId(command.payload.id),
                accountId: new NotificationInboxSettingAccountId(command.payload.accountId),
                sort: new NotificationInboxSettingSort(command.payload.sort),
            },
            command.cQMetadata,
        );
    }
}
