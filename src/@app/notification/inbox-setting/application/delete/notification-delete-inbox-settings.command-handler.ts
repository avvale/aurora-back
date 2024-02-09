import { NotificationDeleteInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingsService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-settings.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteInboxSettingsCommand)
export class NotificationDeleteInboxSettingsCommandHandler implements ICommandHandler<NotificationDeleteInboxSettingsCommand>
{
    constructor(
        private readonly deleteInboxSettingsService: NotificationDeleteInboxSettingsService,
    ) {}

    async execute(command: NotificationDeleteInboxSettingsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteInboxSettingsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
