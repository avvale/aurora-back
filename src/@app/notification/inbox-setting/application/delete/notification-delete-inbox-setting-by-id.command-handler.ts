import { NotificationDeleteInboxSettingByIdCommand } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingByIdService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-setting-by-id.service';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationDeleteInboxSettingByIdCommand)
export class NotificationDeleteInboxSettingByIdCommandHandler implements ICommandHandler<NotificationDeleteInboxSettingByIdCommand>
{
    constructor(
        private readonly deleteInboxSettingByIdService: NotificationDeleteInboxSettingByIdService,
    ) {}

    async execute(command: NotificationDeleteInboxSettingByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteInboxSettingByIdService.main(
            new NotificationInboxSettingId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
