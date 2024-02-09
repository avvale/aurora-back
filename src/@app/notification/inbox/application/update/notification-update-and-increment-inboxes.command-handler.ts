/* eslint-disable key-spacing */
import { NotificationUpdateAndIncrementInboxesCommand } from '@app/notification/inbox';
import { NotificationUpdateAndIncrementInboxesService } from '@app/notification/inbox/application/update/notification-update-and-increment-inboxes.service';
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

@CommandHandler(NotificationUpdateAndIncrementInboxesCommand)
export class NotificationUpdateAndIncrementInboxesCommandHandler implements ICommandHandler<NotificationUpdateAndIncrementInboxesCommand>
{
    constructor(
        private readonly updateInboxesService: NotificationUpdateAndIncrementInboxesService,
    ) {}

    async execute(command: NotificationUpdateAndIncrementInboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInboxesService.main(
            {
                id: new NotificationInboxId(command.payload.id, { undefinable: true }),
                tenantIds: new NotificationInboxTenantIds(command.payload.tenantIds),
                notificationId: new NotificationInboxNotificationId(command.payload.notificationId, { undefinable: true }),
                sort: new NotificationInboxSort(command.payload.sort, { undefinable: true }),
                accountId: new NotificationInboxAccountId(command.payload.accountId, { undefinable: true }),
                accountCode: new NotificationInboxAccountCode(command.payload.accountCode),
                isImportant: new NotificationInboxIsImportant(command.payload.isImportant, { undefinable: true }),
                subject: new NotificationInboxSubject(command.payload.subject, { undefinable: true }),
                body: new NotificationInboxBody(command.payload.body, { undefinable: true }),
                attachments: new NotificationInboxAttachments(command.payload.attachments),
                isRead: new NotificationInboxIsRead(command.payload.isRead, { undefinable: true }),
                isReadAtLeastOnce: new NotificationInboxIsReadAtLeastOnce(command.payload.isReadAtLeastOnce, { undefinable: true }),
                meta: new NotificationInboxMeta(command.payload.meta),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
