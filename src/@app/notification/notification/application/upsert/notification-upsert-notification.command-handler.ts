/* eslint-disable key-spacing */
import { NotificationUpsertNotificationCommand } from '@app/notification/notification';
import { NotificationUpsertNotificationService } from '@app/notification/notification/application/upsert/notification-upsert-notification.service';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopes,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantId,
    NotificationNotificationTenantIds,
    NotificationNotificationTotalRecipients,
} from '@app/notification/notification/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationUpsertNotificationCommand)
export class NotificationUpsertNotificationCommandHandler implements ICommandHandler<NotificationUpsertNotificationCommand>
{
    constructor(
        private readonly upsertNotificationService: NotificationUpsertNotificationService,
    ) {}

    async execute(command: NotificationUpsertNotificationCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertNotificationService.main(
            {
                id: new NotificationNotificationId(command.payload.id),
                tenantId: new NotificationNotificationTenantId(command.payload.tenantId),
                status: new NotificationNotificationStatus(command.payload.status),
                accountIds: new NotificationNotificationAccountIds(command.payload.accountIds),
                tenantIds: new NotificationNotificationTenantIds(command.payload.tenantIds),
                scopes: new NotificationNotificationScopes(command.payload.scopes),
                sendAt: new NotificationNotificationSendAt(command.payload.sendAt, {}, { removeTimezone: command.cQMetadata.timezone }),
                isImportant: new NotificationNotificationIsImportant(command.payload.isImportant),
                subject: new NotificationNotificationSubject(command.payload.subject),
                body: new NotificationNotificationBody(command.payload.body),
                attachments: new NotificationNotificationAttachments(command.payload.attachments),
                totalRecipients: new NotificationNotificationTotalRecipients(command.payload.totalRecipients),
                reads: new NotificationNotificationReads(command.payload.reads),
                meta: new NotificationNotificationMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
