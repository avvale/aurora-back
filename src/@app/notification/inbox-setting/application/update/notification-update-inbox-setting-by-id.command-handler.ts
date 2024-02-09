/* eslint-disable key-spacing */
import { NotificationUpdateInboxSettingByIdCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingByIdService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-setting-by-id.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpdateInboxSettingByIdCommand)
export class NotificationUpdateInboxSettingByIdCommandHandler implements ICommandHandler<NotificationUpdateInboxSettingByIdCommand>
{
    constructor(
        private readonly updateInboxSettingByIdService: NotificationUpdateInboxSettingByIdService,
    ) {}

    async execute(command: NotificationUpdateInboxSettingByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInboxSettingByIdService.main(
            {
                id: new NotificationInboxSettingId(command.payload.id),
                accountId: new NotificationInboxSettingAccountId(command.payload.accountId, { undefinable: true }),
                sort: new NotificationInboxSettingSort(command.payload.sort, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
