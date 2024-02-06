import { NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationCreatedAt,
    NotificationOutBoxNotificationDeletedAt,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
    NotificationOutBoxNotificationUpdatedAt,
} from '@app/notification/out-box-notification/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationMockOutBoxNotificationRepository extends MockRepository<NotificationOutBoxNotification> implements NotificationIOutBoxNotificationRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'NotificationOutBoxNotification';
    public collectionSource: NotificationOutBoxNotification[];

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

        for (const itemCollection of <any[]>notificationMockOutBoxNotificationData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(NotificationOutBoxNotification.register(
                new NotificationOutBoxNotificationId(itemCollection.id),
                new NotificationOutBoxNotificationSort(itemCollection.sort),
                new NotificationOutBoxNotificationTenantId(itemCollection.tenantId),
                new NotificationOutBoxNotificationAccountIds(itemCollection.accountIds),
                new NotificationOutBoxNotificationAccountTenantOperator(itemCollection.accountTenantOperator),
                new NotificationOutBoxNotificationTenantIds(itemCollection.tenantIds),
                new NotificationOutBoxNotificationScopes(itemCollection.scopes),
                new NotificationOutBoxNotificationIsImportant(itemCollection.isImportant),
                new NotificationOutBoxNotificationSubject(itemCollection.subject),
                new NotificationOutBoxNotificationBody(itemCollection.body),
                new NotificationOutBoxNotificationAttachments(itemCollection.attachments),
                new NotificationOutBoxNotificationMeta(itemCollection.meta),
                new NotificationOutBoxNotificationCreatedAt(itemCollection.createdAt),
                new NotificationOutBoxNotificationUpdatedAt(itemCollection.updatedAt),
                new NotificationOutBoxNotificationDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
