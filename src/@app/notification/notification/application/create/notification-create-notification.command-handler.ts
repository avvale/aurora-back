/* eslint-disable key-spacing */
import { NotificationCreateNotificationCommand } from '@app/notification/notification';
import { NotificationCreateNotificationService } from '@app/notification/notification/application/create/notification-create-notification.service';
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

@CommandHandler(NotificationCreateNotificationCommand)
export class NotificationCreateNotificationCommandHandler implements ICommandHandler<NotificationCreateNotificationCommand>
{
    constructor(
        private readonly createNotificationService: NotificationCreateNotificationService,
    ) {}

    async execute(command: NotificationCreateNotificationCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createNotificationService.main(
            {
                id: new NotificationNotificationId(command.payload.id),
                tenantIds: new NotificationNotificationTenantIds(command.payload.tenantIds),
                status: new NotificationNotificationStatus(command.payload.status),
                accountRecipientIds: new NotificationNotificationAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new NotificationNotificationTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipientIds: new NotificationNotificationScopeRecipientIds(command.payload.scopeRecipientIds),
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
