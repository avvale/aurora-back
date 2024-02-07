import { NotificationDeleteNotificationByIdCommand } from '@app/notification/notification';
import { NotificationDeleteNotificationByIdService } from '@app/notification/notification/application/delete/notification-delete-notification-by-id.service';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteNotificationByIdCommand)
export class NotificationDeleteNotificationByIdCommandHandler implements ICommandHandler<NotificationDeleteNotificationByIdCommand>
{
    constructor(
        private readonly deleteNotificationByIdService: NotificationDeleteNotificationByIdService,
    ) {}

    async execute(command: NotificationDeleteNotificationByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteNotificationByIdService.main(
            new NotificationNotificationId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
