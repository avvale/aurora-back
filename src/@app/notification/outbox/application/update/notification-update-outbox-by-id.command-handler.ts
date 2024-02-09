/* eslint-disable key-spacing */
import { NotificationUpdateOutboxByIdCommand } from '@app/notification/outbox';
import { NotificationUpdateOutboxByIdService } from '@app/notification/outbox/application/update/notification-update-outbox-by-id.service';
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

@CommandHandler(NotificationUpdateOutboxByIdCommand)
export class NotificationUpdateOutboxByIdCommandHandler implements ICommandHandler<NotificationUpdateOutboxByIdCommand>
{
    constructor(
        private readonly updateOutboxByIdService: NotificationUpdateOutboxByIdService,
    ) {}

    async execute(command: NotificationUpdateOutboxByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateOutboxByIdService.main(
            {
                id: new NotificationOutboxId(command.payload.id),
                notificationId: new NotificationOutboxNotificationId(command.payload.notificationId, { undefinable: true }),
                sort: new NotificationOutboxSort(command.payload.sort, { undefinable: true }),
                accountRecipientIds: new NotificationOutboxAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new NotificationOutboxTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new NotificationOutboxScopeRecipients(command.payload.scopeRecipients),
                meta: new NotificationOutboxMeta(command.payload.meta),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
