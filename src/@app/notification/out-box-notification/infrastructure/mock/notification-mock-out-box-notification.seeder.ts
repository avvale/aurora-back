import { notificationMockOutBoxNotificationData, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class NotificationMockOutBoxNotificationSeeder extends MockSeeder<NotificationOutBoxNotification>
{
    public collectionSource: NotificationOutBoxNotification[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const outBoxNotification of _.orderBy(notificationMockOutBoxNotificationData, ['id']))
        {
            this.collectionSource.push(
                NotificationOutBoxNotification.register(
                    new NotificationOutBoxNotificationId(outBoxNotification.id),
                    new NotificationOutBoxNotificationSort(outBoxNotification.sort),
                    new NotificationOutBoxNotificationTenantId(outBoxNotification.tenantId),
                    new NotificationOutBoxNotificationAccountIds(outBoxNotification.accountIds),
                    new NotificationOutBoxNotificationAccountTenantOperator(outBoxNotification.accountTenantOperator),
                    new NotificationOutBoxNotificationTenantIds(outBoxNotification.tenantIds),
                    new NotificationOutBoxNotificationScopes(outBoxNotification.scopes),
                    new NotificationOutBoxNotificationIsImportant(outBoxNotification.isImportant),
                    new NotificationOutBoxNotificationSubject(outBoxNotification.subject),
                    new NotificationOutBoxNotificationBody(outBoxNotification.body),
                    new NotificationOutBoxNotificationAttachments(outBoxNotification.attachments),
                    new NotificationOutBoxNotificationMeta(outBoxNotification.meta),
                    new NotificationOutBoxNotificationCreatedAt({ currentTimestamp: true }),
                    new NotificationOutBoxNotificationUpdatedAt({ currentTimestamp: true }),
                    new NotificationOutBoxNotificationDeletedAt(null),
                ),
            );
        }
    }
}
