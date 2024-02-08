/* eslint-disable key-spacing */
import { NotificationUpdateAndIncrementNotificationsCommand } from '@app/notification/notification';
import { NotificationUpdateAndIncrementNotificationsService } from '@app/notification/notification/application/update/notification-update-and-increment-notifications.service';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopeRecipientIds,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantIds,
    NotificationNotificationTenantRecipientIds,
    NotificationNotificationTotalRecipients,
} from '@app/notification/notification/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpdateAndIncrementNotificationsCommand)
export class NotificationUpdateAndIncrementNotificationsCommandHandler implements ICommandHandler<NotificationUpdateAndIncrementNotificationsCommand>
{
    constructor(
        private readonly updateNotificationsService: NotificationUpdateAndIncrementNotificationsService,
    ) {}

    async execute(command: NotificationUpdateAndIncrementNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateNotificationsService.main(
            {
                id: new NotificationNotificationId(command.payload.id, { undefinable: true }),
                tenantIds: new NotificationNotificationTenantIds(command.payload.tenantIds),
                status: new NotificationNotificationStatus(command.payload.status, { undefinable: true }),
                accountRecipientIds: new NotificationNotificationAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new NotificationNotificationTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipientIds: new NotificationNotificationScopeRecipientIds(command.payload.scopeRecipientIds),
                sendAt: new NotificationNotificationSendAt(command.payload.sendAt, {}, { removeTimezone: command.cQMetadata.timezone }),
                isImportant: new NotificationNotificationIsImportant(command.payload.isImportant, { undefinable: true }),
                subject: new NotificationNotificationSubject(command.payload.subject, { undefinable: true }),
                body: new NotificationNotificationBody(command.payload.body, { undefinable: true }),
                attachments: new NotificationNotificationAttachments(command.payload.attachments),
                totalRecipients: new NotificationNotificationTotalRecipients(command.payload.totalRecipients, { undefinable: true }),
                reads: new NotificationNotificationReads(command.payload.reads, { undefinable: true }),
                meta: new NotificationNotificationMeta(command.payload.meta),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
