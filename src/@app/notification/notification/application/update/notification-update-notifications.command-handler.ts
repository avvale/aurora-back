/* eslint-disable key-spacing */
import { NotificationUpdateNotificationsCommand } from '@app/notification/notification';
import { NotificationUpdateNotificationsService } from '@app/notification/notification/application/update/notification-update-notifications.service';
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

@CommandHandler(NotificationUpdateNotificationsCommand)
export class NotificationUpdateNotificationsCommandHandler implements ICommandHandler<NotificationUpdateNotificationsCommand>
{
    constructor(
        private readonly updateNotificationsService: NotificationUpdateNotificationsService,
    ) {}

    async execute(command: NotificationUpdateNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateNotificationsService.main(
            {
                id: new NotificationNotificationId(command.payload.id, { undefinable: true }),
                tenantId: new NotificationNotificationTenantId(command.payload.tenantId),
                status: new NotificationNotificationStatus(command.payload.status, { undefinable: true }),
                accountIds: new NotificationNotificationAccountIds(command.payload.accountIds),
                tenantIds: new NotificationNotificationTenantIds(command.payload.tenantIds),
                scopes: new NotificationNotificationScopes(command.payload.scopes),
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
