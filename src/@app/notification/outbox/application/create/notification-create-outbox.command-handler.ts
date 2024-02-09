/* eslint-disable key-spacing */
import { NotificationCreateOutboxCommand } from '@app/notification/outbox';
import { NotificationCreateOutboxService } from '@app/notification/outbox/application/create/notification-create-outbox.service';
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

@CommandHandler(NotificationCreateOutboxCommand)
export class NotificationCreateOutboxCommandHandler implements ICommandHandler<NotificationCreateOutboxCommand>
{
    constructor(
        private readonly createOutboxService: NotificationCreateOutboxService,
    ) {}

    async execute(command: NotificationCreateOutboxCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createOutboxService.main(
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
