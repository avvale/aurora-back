import { NotificationInbox, notificationMockInboxData } from '@app/notification/inbox';
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class NotificationMockInboxSeeder extends MockSeeder<NotificationInbox>
{
    public collectionSource: NotificationInbox[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const inbox of _.orderBy(notificationMockInboxData, ['id']))
        {
            this.collectionSource.push(
                NotificationInbox.register(
                    new NotificationInboxId(inbox.id),
                    new NotificationInboxTenantIds(inbox.tenantIds),
                    new NotificationInboxNotificationId(inbox.notificationId),
                    new NotificationInboxSort(inbox.sort),
                    new NotificationInboxAccountId(inbox.accountId),
                    new NotificationInboxAccountCode(inbox.accountCode),
                    new NotificationInboxIsImportant(inbox.isImportant),
                    new NotificationInboxSubject(inbox.subject),
                    new NotificationInboxBody(inbox.body),
                    new NotificationInboxAttachments(inbox.attachments),
                    new NotificationInboxIsRead(inbox.isRead),
                    new NotificationInboxIsReadAtLeastOnce(inbox.isReadAtLeastOnce),
                    new NotificationInboxMeta(inbox.meta),
                    new NotificationInboxCreatedAt({ currentTimestamp: true }),
                    new NotificationInboxUpdatedAt({ currentTimestamp: true }),
                    new NotificationInboxDeletedAt(null),
                ),
            );
        }
    }
}
