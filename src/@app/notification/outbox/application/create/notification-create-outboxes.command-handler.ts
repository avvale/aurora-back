/* eslint-disable key-spacing */
import { NotificationCreateOutboxesCommand } from '@app/notification/outbox';
import { NotificationCreateOutboxesService } from '@app/notification/outbox/application/create/notification-create-outboxes.service';
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

@CommandHandler(NotificationCreateOutboxesCommand)
export class NotificationCreateOutboxesCommandHandler implements ICommandHandler<NotificationCreateOutboxesCommand>
{
    constructor(
        private readonly createOutboxesService: NotificationCreateOutboxesService,
    ) {}

    async execute(command: NotificationCreateOutboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createOutboxesService.main(
            command.payload
                .map(outbox =>
                {
                    return {
                        id: new NotificationOutboxId(outbox.id),
                        notificationId: new NotificationOutboxNotificationId(outbox.notificationId),
                        sort: new NotificationOutboxSort(outbox.sort),
                        accountRecipientIds: new NotificationOutboxAccountRecipientIds(outbox.accountRecipientIds),
                        tenantRecipientIds: new NotificationOutboxTenantRecipientIds(outbox.tenantRecipientIds),
                        scopeRecipients: new NotificationOutboxScopeRecipients(outbox.scopeRecipients),
                        meta: new NotificationOutboxMeta(outbox.meta),
                    };
                }),
            command.cQMetadata,
        );
    }
}
