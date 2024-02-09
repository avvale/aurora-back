import { NotificationDeleteOutboxByIdCommand } from '@app/notification/outbox';
import { NotificationDeleteOutboxByIdService } from '@app/notification/outbox/application/delete/notification-delete-outbox-by-id.service';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteOutboxByIdCommand)
export class NotificationDeleteOutboxByIdCommandHandler implements ICommandHandler<NotificationDeleteOutboxByIdCommand>
{
    constructor(
        private readonly deleteOutboxByIdService: NotificationDeleteOutboxByIdService,
    ) {}

    async execute(command: NotificationDeleteOutboxByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteOutboxByIdService.main(
            new NotificationOutboxId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
