import { NotificationDeleteNotificationsCommand } from '@app/notification/notification';
import { NotificationDeleteNotificationsService } from '@app/notification/notification/application/delete/notification-delete-notifications.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteNotificationsCommand)
export class NotificationDeleteNotificationsCommandHandler implements ICommandHandler<NotificationDeleteNotificationsCommand>
{
    constructor(
        private readonly deleteNotificationsService: NotificationDeleteNotificationsService,
    ) {}

    async execute(command: NotificationDeleteNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteNotificationsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
