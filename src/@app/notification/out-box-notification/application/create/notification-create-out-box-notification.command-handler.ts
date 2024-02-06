/* eslint-disable key-spacing */
import { NotificationCreateOutBoxNotificationCommand } from '@app/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationService } from '@app/notification/out-box-notification/application/create/notification-create-out-box-notification.service';
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

@CommandHandler(NotificationCreateOutBoxNotificationCommand)
export class NotificationCreateOutBoxNotificationCommandHandler implements ICommandHandler<NotificationCreateOutBoxNotificationCommand>
{
    constructor(
        private readonly createOutBoxNotificationService: NotificationCreateOutBoxNotificationService,
    ) {}

    async execute(command: NotificationCreateOutBoxNotificationCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createOutBoxNotificationService.main(
            {
                id: new NotificationOutBoxNotificationId(command.payload.id),
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
