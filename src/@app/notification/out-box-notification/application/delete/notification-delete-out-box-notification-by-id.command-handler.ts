import { NotificationDeleteOutBoxNotificationByIdCommand } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notification-by-id.service';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteOutBoxNotificationByIdCommand)
export class NotificationDeleteOutBoxNotificationByIdCommandHandler implements ICommandHandler<NotificationDeleteOutBoxNotificationByIdCommand>
{
    constructor(
        private readonly deleteOutBoxNotificationByIdService: NotificationDeleteOutBoxNotificationByIdService,
    ) {}

    async execute(command: NotificationDeleteOutBoxNotificationByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteOutBoxNotificationByIdService.main(
            new NotificationOutBoxNotificationId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
