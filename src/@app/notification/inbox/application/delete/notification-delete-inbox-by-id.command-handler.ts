import { NotificationDeleteInboxByIdCommand } from '@app/notification/inbox';
import { NotificationDeleteInboxByIdService } from '@app/notification/inbox/application/delete/notification-delete-inbox-by-id.service';
import { NotificationInboxId } from '@app/notification/inbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteInboxByIdCommand)
export class NotificationDeleteInboxByIdCommandHandler implements ICommandHandler<NotificationDeleteInboxByIdCommand>
{
    constructor(
        private readonly deleteInboxByIdService: NotificationDeleteInboxByIdService,
    ) {}

    async execute(command: NotificationDeleteInboxByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteInboxByIdService.main(
            new NotificationInboxId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
