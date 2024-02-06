import { NotificationDeleteOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationsService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notifications.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteOutBoxNotificationsCommand)
export class NotificationDeleteOutBoxNotificationsCommandHandler implements ICommandHandler<NotificationDeleteOutBoxNotificationsCommand>
{
    constructor(
        private readonly deleteOutBoxNotificationsService: NotificationDeleteOutBoxNotificationsService,
    ) {}

    async execute(command: NotificationDeleteOutBoxNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteOutBoxNotificationsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
