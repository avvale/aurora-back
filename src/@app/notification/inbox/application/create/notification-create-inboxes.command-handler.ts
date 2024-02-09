/* eslint-disable key-spacing */
import { NotificationCreateInboxesCommand } from '@app/notification/inbox';
import { NotificationCreateInboxesService } from '@app/notification/inbox/application/create/notification-create-inboxes.service';
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

@CommandHandler(NotificationCreateInboxesCommand)
export class NotificationCreateInboxesCommandHandler implements ICommandHandler<NotificationCreateInboxesCommand>
{
    constructor(
        private readonly createInboxesService: NotificationCreateInboxesService,
    ) {}

    async execute(command: NotificationCreateInboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createInboxesService.main(
            command.payload
                .map(inbox =>
                {
                    return {
                        id: new NotificationInboxId(inbox.id),
                        tenantIds: new NotificationInboxTenantIds(inbox.tenantIds),
                        notificationId: new NotificationInboxNotificationId(inbox.notificationId),
                        sort: new NotificationInboxSort(inbox.sort),
                        accountId: new NotificationInboxAccountId(inbox.accountId),
                        accountCode: new NotificationInboxAccountCode(inbox.accountCode),
                        isImportant: new NotificationInboxIsImportant(inbox.isImportant),
                        subject: new NotificationInboxSubject(inbox.subject),
                        body: new NotificationInboxBody(inbox.body),
                        attachments: new NotificationInboxAttachments(inbox.attachments),
                        isRead: new NotificationInboxIsRead(inbox.isRead),
                        isReadAtLeastOnce: new NotificationInboxIsReadAtLeastOnce(inbox.isReadAtLeastOnce),
                        meta: new NotificationInboxMeta(inbox.meta),
                    };
                }),
            command.cQMetadata,
        );
    }
}
