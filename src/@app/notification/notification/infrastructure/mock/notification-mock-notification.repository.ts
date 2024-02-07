import { NotificationINotificationRepository, notificationMockNotificationData, NotificationNotification } from '@app/notification/notification';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopes,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantId,
    NotificationNotificationTenantIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationMockNotificationRepository extends MockRepository<NotificationNotification> implements NotificationINotificationRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'NotificationNotification';
    public collectionSource: NotificationNotification[];

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

        for (const itemCollection of <any[]>notificationMockNotificationData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(NotificationNotification.register(
                new NotificationNotificationId(itemCollection.id),
                new NotificationNotificationTenantId(itemCollection.tenantId),
                new NotificationNotificationStatus(itemCollection.status),
                new NotificationNotificationAccountIds(itemCollection.accountIds),
                new NotificationNotificationTenantIds(itemCollection.tenantIds),
                new NotificationNotificationScopes(itemCollection.scopes),
                new NotificationNotificationSendAt(itemCollection.sendAt),
                new NotificationNotificationIsImportant(itemCollection.isImportant),
                new NotificationNotificationSubject(itemCollection.subject),
                new NotificationNotificationBody(itemCollection.body),
                new NotificationNotificationAttachments(itemCollection.attachments),
                new NotificationNotificationTotalRecipients(itemCollection.totalRecipients),
                new NotificationNotificationReads(itemCollection.reads),
                new NotificationNotificationMeta(itemCollection.meta),
                new NotificationNotificationCreatedAt(itemCollection.createdAt),
                new NotificationNotificationUpdatedAt(itemCollection.updatedAt),
                new NotificationNotificationDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
