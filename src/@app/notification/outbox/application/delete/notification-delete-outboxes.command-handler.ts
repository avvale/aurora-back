import { NotificationDeleteOutboxesCommand } from '@app/notification/outbox';
import { NotificationDeleteOutboxesService } from '@app/notification/outbox/application/delete/notification-delete-outboxes.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteOutboxesCommand)
export class NotificationDeleteOutboxesCommandHandler implements ICommandHandler<NotificationDeleteOutboxesCommand>
{
    constructor(
        private readonly deleteOutboxesService: NotificationDeleteOutboxesService,
    ) {}

    async execute(command: NotificationDeleteOutboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteOutboxesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
