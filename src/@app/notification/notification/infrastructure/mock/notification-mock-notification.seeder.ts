import { notificationMockNotificationData, NotificationNotification } from '@app/notification/notification';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
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
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class NotificationMockNotificationSeeder extends MockSeeder<NotificationNotification>
{
    public collectionSource: NotificationNotification[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const notification of _.orderBy(notificationMockNotificationData, ['id']))
        {
            this.collectionSource.push(
                NotificationNotification.register(
                    new NotificationNotificationId(notification.id),
                    new NotificationNotificationTenantIds(notification.tenantIds),
                    new NotificationNotificationStatus(notification.status),
                    new NotificationNotificationAccountRecipientIds(notification.accountRecipientIds),
                    new NotificationNotificationTenantRecipientIds(notification.tenantRecipientIds),
                    new NotificationNotificationScopeRecipientIds(notification.scopeRecipientIds),
                    new NotificationNotificationSendAt(notification.sendAt),
                    new NotificationNotificationIsImportant(notification.isImportant),
                    new NotificationNotificationSubject(notification.subject),
                    new NotificationNotificationBody(notification.body),
                    new NotificationNotificationAttachments(notification.attachments),
                    new NotificationNotificationTotalRecipients(notification.totalRecipients),
                    new NotificationNotificationReads(notification.reads),
                    new NotificationNotificationMeta(notification.meta),
                    new NotificationNotificationCreatedAt({ currentTimestamp: true }),
                    new NotificationNotificationUpdatedAt({ currentTimestamp: true }),
                    new NotificationNotificationDeletedAt(null),
                ),
            );
        }
    }
}
