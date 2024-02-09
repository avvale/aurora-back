import { NotificationDeleteInboxesCommand } from '@app/notification/inbox';
import { NotificationDeleteInboxesService } from '@app/notification/inbox/application/delete/notification-delete-inboxes.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteInboxesCommand)
export class NotificationDeleteInboxesCommandHandler implements ICommandHandler<NotificationDeleteInboxesCommand>
{
    constructor(
        private readonly deleteInboxesService: NotificationDeleteInboxesService,
    ) {}

    async execute(command: NotificationDeleteInboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteInboxesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
