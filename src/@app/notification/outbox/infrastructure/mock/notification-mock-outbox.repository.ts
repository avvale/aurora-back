import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationOutbox } from '@app/notification/outbox';
import {
    NotificationOutboxAccountRecipientIds,
    NotificationOutboxCreatedAt,
    NotificationOutboxDeletedAt,
    NotificationOutboxId,
    NotificationOutboxMeta,
    NotificationOutboxNotificationId,
    NotificationOutboxScopeRecipients,
    NotificationOutboxSort,
    NotificationOutboxTenantRecipientIds,
    NotificationOutboxUpdatedAt,
} from '@app/notification/outbox/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationMockOutboxRepository extends MockRepository<NotificationOutbox> implements NotificationIOutboxRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'NotificationOutbox';
    public collectionSource: NotificationOutbox[];

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

        for (const itemCollection of <any[]>notificationMockOutboxData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(NotificationOutbox.register(
                new NotificationOutboxId(itemCollection.id),
                new NotificationOutboxNotificationId(itemCollection.notificationId),
                new NotificationOutboxSort(itemCollection.sort),
                new NotificationOutboxAccountRecipientIds(itemCollection.accountRecipientIds),
                new NotificationOutboxTenantRecipientIds(itemCollection.tenantRecipientIds),
                new NotificationOutboxScopeRecipients(itemCollection.scopeRecipients),
                new NotificationOutboxMeta(itemCollection.meta),
                new NotificationOutboxCreatedAt(itemCollection.createdAt),
                new NotificationOutboxUpdatedAt(itemCollection.updatedAt),
                new NotificationOutboxDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
