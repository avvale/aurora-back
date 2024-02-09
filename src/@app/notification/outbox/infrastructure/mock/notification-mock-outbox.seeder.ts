import { notificationMockOutboxData, NotificationOutbox } from '@app/notification/outbox';
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
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class NotificationMockOutboxSeeder extends MockSeeder<NotificationOutbox>
{
    public collectionSource: NotificationOutbox[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const outbox of _.orderBy(notificationMockOutboxData, ['id']))
        {
            this.collectionSource.push(
                NotificationOutbox.register(
                    new NotificationOutboxId(outbox.id),
                    new NotificationOutboxNotificationId(outbox.notificationId),
                    new NotificationOutboxSort(outbox.sort),
                    new NotificationOutboxAccountRecipientIds(outbox.accountRecipientIds),
                    new NotificationOutboxTenantRecipientIds(outbox.tenantRecipientIds),
                    new NotificationOutboxScopeRecipients(outbox.scopeRecipients),
                    new NotificationOutboxMeta(outbox.meta),
                    new NotificationOutboxCreatedAt({ currentTimestamp: true }),
                    new NotificationOutboxUpdatedAt({ currentTimestamp: true }),
                    new NotificationOutboxDeletedAt(null),
                ),
            );
        }
    }
}
