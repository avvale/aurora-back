/* eslint-disable key-spacing */
import { NotificationUpsertOutBoxNotificationCommand } from '@app/notification/out-box-notification';
import { NotificationUpsertOutBoxNotificationService } from '@app/notification/out-box-notification/application/upsert/notification-upsert-out-box-notification.service';
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

@CommandHandler(NotificationUpsertOutBoxNotificationCommand)
export class NotificationUpsertOutBoxNotificationCommandHandler implements ICommandHandler<NotificationUpsertOutBoxNotificationCommand>
{
    constructor(
        private readonly upsertOutBoxNotificationService: NotificationUpsertOutBoxNotificationService,
    ) {}

    async execute(command: NotificationUpsertOutBoxNotificationCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertOutBoxNotificationService.main(
            {
                id: new NotificationOutBoxNotificationId(command.payload.id),
                sort: new NotificationOutBoxNotificationSort(command.payload.sort),
                tenantId: new NotificationOutBoxNotificationTenantId(command.payload.tenantId),
                accountIds: new NotificationOutBoxNotificationAccountIds(command.payload.accountIds),
                accountTenantOperator: new NotificationOutBoxNotificationAccountTenantOperator(command.payload.accountTenantOperator),
                tenantIds: new NotificationOutBoxNotificationTenantIds(command.payload.tenantIds),
                scopes: new NotificationOutBoxNotificationScopes(command.payload.scopes),
                isImportant: new NotificationOutBoxNotificationIsImportant(command.payload.isImportant),
                subject: new NotificationOutBoxNotificationSubject(command.payload.subject),
                body: new NotificationOutBoxNotificationBody(command.payload.body),
                attachments: new NotificationOutBoxNotificationAttachments(command.payload.attachments),
                meta: new NotificationOutBoxNotificationMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
