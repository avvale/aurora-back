/* eslint-disable key-spacing */
import { NotificationUpdateOutboxesCommand } from '@app/notification/outbox';
import { NotificationUpdateOutboxesService } from '@app/notification/outbox/application/update/notification-update-outboxes.service';
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

@CommandHandler(NotificationUpdateOutboxesCommand)
export class NotificationUpdateOutboxesCommandHandler implements ICommandHandler<NotificationUpdateOutboxesCommand>
{
    constructor(
        private readonly updateOutboxesService: NotificationUpdateOutboxesService,
    ) {}

    async execute(command: NotificationUpdateOutboxesCommand): Promise<void>
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
