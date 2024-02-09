/* eslint-disable key-spacing */
import { NotificationUpdateAndIncrementOutboxesCommand } from '@app/notification/outbox';
import { NotificationUpdateAndIncrementOutboxesService } from '@app/notification/outbox/application/update/notification-update-and-increment-outboxes.service';
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

@CommandHandler(NotificationUpdateAndIncrementOutboxesCommand)
export class NotificationUpdateAndIncrementOutboxesCommandHandler implements ICommandHandler<NotificationUpdateAndIncrementOutboxesCommand>
{
    constructor(
        private readonly updateOutboxesService: NotificationUpdateAndIncrementOutboxesService,
    ) {}

    async execute(command: NotificationUpdateAndIncrementOutboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateOutboxesService.main(
            {
                id: new NotificationOutboxId(command.payload.id, { undefinable: true }),
                notificationId: new NotificationOutboxNotificationId(command.payload.notificationId, { undefinable: true }),
                sort: new NotificationOutboxSort(command.payload.sort, { undefinable: true }),
                accountRecipientIds: new NotificationOutboxAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new NotificationOutboxTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new NotificationOutboxScopeRecipients(command.payload.scopeRecipients),
                meta: new NotificationOutboxMeta(command.payload.meta),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
