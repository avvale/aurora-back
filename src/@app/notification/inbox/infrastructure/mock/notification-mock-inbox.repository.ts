import { NotificationIInboxRepository, NotificationInbox, notificationMockInboxData } from '@app/notification/inbox';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxCreatedAt,
    NotificationInboxDeletedAt,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
    NotificationInboxUpdatedAt,
} from '@app/notification/inbox/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationMockInboxRepository extends MockRepository<NotificationInbox> implements NotificationIInboxRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'NotificationInbox';
    public collectionSource: NotificationInbox[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>notificationMockInboxData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(NotificationInbox.register(
                new NotificationInboxId(itemCollection.id),
                new NotificationInboxTenantIds(itemCollection.tenantIds),
                new NotificationInboxNotificationId(itemCollection.notificationId),
                new NotificationInboxSort(itemCollection.sort),
                new NotificationInboxAccountId(itemCollection.accountId),
                new NotificationInboxAccountCode(itemCollection.accountCode),
                new NotificationInboxIsImportant(itemCollection.isImportant),
                new NotificationInboxSubject(itemCollection.subject),
                new NotificationInboxBody(itemCollection.body),
                new NotificationInboxAttachments(itemCollection.attachments),
                new NotificationInboxIsRead(itemCollection.isRead),
                new NotificationInboxIsReadAtLeastOnce(itemCollection.isReadAtLeastOnce),
                new NotificationInboxMeta(itemCollection.meta),
                new NotificationInboxCreatedAt(itemCollection.createdAt),
                new NotificationInboxUpdatedAt(itemCollection.updatedAt),
                new NotificationInboxDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
