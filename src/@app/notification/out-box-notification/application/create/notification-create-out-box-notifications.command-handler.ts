/* eslint-disable key-spacing */
import { NotificationCreateOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/create/notification-create-out-box-notifications.service';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
} from '@app/notification/out-box-notification/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationCreateOutBoxNotificationsCommand)
export class NotificationCreateOutBoxNotificationsCommandHandler implements ICommandHandler<NotificationCreateOutBoxNotificationsCommand>
{
    constructor(
        private readonly createOutBoxNotificationsService: NotificationCreateOutBoxNotificationsService,
    ) {}

    async execute(command: NotificationCreateOutBoxNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createOutBoxNotificationsService.main(
            command.payload
                .map(outBoxNotification =>
                {
                    return {
                        id: new NotificationOutBoxNotificationId(outBoxNotification.id),
                        sort: new NotificationOutBoxNotificationSort(undefined),
                        tenantId: new NotificationOutBoxNotificationTenantId(outBoxNotification.tenantId),
                        accountIds: new NotificationOutBoxNotificationAccountIds(outBoxNotification.accountIds),
                        accountTenantOperator: new NotificationOutBoxNotificationAccountTenantOperator(outBoxNotification.accountTenantOperator),
                        tenantIds: new NotificationOutBoxNotificationTenantIds(outBoxNotification.tenantIds),
                        scopes: new NotificationOutBoxNotificationScopes(outBoxNotification.scopes),
                        isImportant: new NotificationOutBoxNotificationIsImportant(outBoxNotification.isImportant),
                        subject: new NotificationOutBoxNotificationSubject(outBoxNotification.subject),
                        body: new NotificationOutBoxNotificationBody(outBoxNotification.body),
                        attachments: new NotificationOutBoxNotificationAttachments(outBoxNotification.attachments),
                        meta: new NotificationOutBoxNotificationMeta(outBoxNotification.meta),
                    };
                }),
            command.cQMetadata,
        );
    }
}
