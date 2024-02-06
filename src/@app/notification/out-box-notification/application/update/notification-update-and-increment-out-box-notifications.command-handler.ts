/* eslint-disable key-spacing */
import { NotificationUpdateAndIncrementOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationUpdateAndIncrementOutBoxNotificationsService } from '@app/notification/out-box-notification/application/update/notification-update-and-increment-out-box-notifications.service';
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

@CommandHandler(NotificationUpdateAndIncrementOutBoxNotificationsCommand)
export class NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler implements ICommandHandler<NotificationUpdateAndIncrementOutBoxNotificationsCommand>
{
    constructor(
        private readonly updateOutBoxNotificationsService: NotificationUpdateAndIncrementOutBoxNotificationsService,
    ) {}

    async execute(command: NotificationUpdateAndIncrementOutBoxNotificationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateOutBoxNotificationsService.main(
            {
                id: new NotificationOutBoxNotificationId(command.payload.id, { undefinable: true }),
                sort: new NotificationOutBoxNotificationSort(command.payload.sort, { undefinable: true }),
                tenantId: new NotificationOutBoxNotificationTenantId(command.payload.tenantId),
                accountIds: new NotificationOutBoxNotificationAccountIds(command.payload.accountIds),
                accountTenantOperator: new NotificationOutBoxNotificationAccountTenantOperator(command.payload.accountTenantOperator),
                tenantIds: new NotificationOutBoxNotificationTenantIds(command.payload.tenantIds),
                scopes: new NotificationOutBoxNotificationScopes(command.payload.scopes),
                isImportant: new NotificationOutBoxNotificationIsImportant(command.payload.isImportant, { undefinable: true }),
                subject: new NotificationOutBoxNotificationSubject(command.payload.subject, { undefinable: true }),
                body: new NotificationOutBoxNotificationBody(command.payload.body, { undefinable: true }),
                attachments: new NotificationOutBoxNotificationAttachments(command.payload.attachments),
                meta: new NotificationOutBoxNotificationMeta(command.payload.meta),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
