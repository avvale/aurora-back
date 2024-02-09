/* eslint-disable key-spacing */
import { NotificationCreateInboxSettingCommand } from '@app/notification/inbox-setting';
import { NotificationCreateInboxSettingService } from '@app/notification/inbox-setting/application/create/notification-create-inbox-setting.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationCreateInboxSettingCommand)
export class NotificationCreateInboxSettingCommandHandler implements ICommandHandler<NotificationCreateInboxSettingCommand>
{
    constructor(
        private readonly createInboxSettingService: NotificationCreateInboxSettingService,
    ) {}

    async execute(command: NotificationCreateInboxSettingCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createInboxSettingService.main(
            {
                id: new NotificationInboxSettingId(command.payload.id),
                accountId: new NotificationInboxSettingAccountId(command.payload.accountId),
                sort: new NotificationInboxSettingSort(command.payload.sort),
            },
            command.cQMetadata,
        );
    }
}
