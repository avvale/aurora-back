/* eslint-disable key-spacing */
import { NotificationCreateInboxCommand } from '@app/notification/inbox';
import { NotificationCreateInboxService } from '@app/notification/inbox/application/create/notification-create-inbox.service';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
} from '@app/notification/inbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationCreateInboxCommand)
export class NotificationCreateInboxCommandHandler implements ICommandHandler<NotificationCreateInboxCommand>
{
    constructor(
        private readonly createInboxService: NotificationCreateInboxService,
    ) {}

    async execute(command: NotificationCreateInboxCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createInboxService.main(
            {
                id: new NotificationInboxId(command.payload.id),
                tenantIds: new NotificationInboxTenantIds(command.payload.tenantIds),
                notificationId: new NotificationInboxNotificationId(command.payload.notificationId),
                sort: new NotificationInboxSort(command.payload.sort),
                accountId: new NotificationInboxAccountId(command.payload.accountId),
                accountCode: new NotificationInboxAccountCode(command.payload.accountCode),
                isImportant: new NotificationInboxIsImportant(command.payload.isImportant),
                subject: new NotificationInboxSubject(command.payload.subject),
                body: new NotificationInboxBody(command.payload.body),
                attachments: new NotificationInboxAttachments(command.payload.attachments),
                isRead: new NotificationInboxIsRead(command.payload.isRead),
                isReadAtLeastOnce: new NotificationInboxIsReadAtLeastOnce(command.payload.isReadAtLeastOnce),
                meta: new NotificationInboxMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
