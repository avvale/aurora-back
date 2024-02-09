/* eslint-disable key-spacing */
import { NotificationUpsertOutboxCommand } from '@app/notification/outbox';
import { NotificationUpsertOutboxService } from '@app/notification/outbox/application/upsert/notification-upsert-outbox.service';
import {
    NotificationOutboxAccountRecipientIds,
    NotificationOutboxId,
    NotificationOutboxMeta,
    NotificationOutboxNotificationId,
    NotificationOutboxScopeRecipients,
    NotificationOutboxSort,
    NotificationOutboxTenantRecipientIds,
} from '@app/notification/outbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpsertOutboxCommand)
export class NotificationUpsertOutboxCommandHandler implements ICommandHandler<NotificationUpsertOutboxCommand>
{
    constructor(
        private readonly upsertOutboxService: NotificationUpsertOutboxService,
    ) {}

    async execute(command: NotificationUpsertOutboxCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertOutboxService.main(
            {
                id: new NotificationOutboxId(command.payload.id),
                notificationId: new NotificationOutboxNotificationId(command.payload.notificationId),
                sort: new NotificationOutboxSort(command.payload.sort),
                accountRecipientIds: new NotificationOutboxAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new NotificationOutboxTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new NotificationOutboxScopeRecipients(command.payload.scopeRecipients),
                meta: new NotificationOutboxMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
