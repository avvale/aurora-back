/* eslint-disable key-spacing */
import { NotificationCreateNotificationsCommand } from '@app/notification/notification';
import { NotificationCreateNotificationsService } from '@app/notification/notification/application/create/notification-create-notifications.service';
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

@CommandHandler(NotificationCreateNotificationsCommand)
export class NotificationCreateNotificationsCommandHandler implements ICommandHandler<NotificationCreateNotificationsCommand>
{
    constructor(
        private readonly createNotificationsService: NotificationCreateNotificationsService,
    ) {}

    async execute(command: NotificationCreateNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createNotificationsService.main(
            command.payload
                .map(notification =>
                {
                    return {
                        id: new NotificationNotificationId(notification.id),
                        tenantId: new NotificationNotificationTenantId(notification.tenantId),
                        status: new NotificationNotificationStatus(notification.status),
                        accountIds: new NotificationNotificationAccountIds(notification.accountIds),
                        tenantIds: new NotificationNotificationTenantIds(notification.tenantIds),
                        scopes: new NotificationNotificationScopes(notification.scopes),
                        sendAt: new NotificationNotificationSendAt(notification.sendAt, {}, { removeTimezone: command.cQMetadata.timezone }),
                        isImportant: new NotificationNotificationIsImportant(notification.isImportant),
                        subject: new NotificationNotificationSubject(notification.subject),
                        body: new NotificationNotificationBody(notification.body),
                        attachments: new NotificationNotificationAttachments(notification.attachments),
                        totalRecipients: new NotificationNotificationTotalRecipients(notification.totalRecipients),
                        reads: new NotificationNotificationReads(notification.reads),
                        meta: new NotificationNotificationMeta(notification.meta),
                    };
                }),
            command.cQMetadata,
        );
    }
}
