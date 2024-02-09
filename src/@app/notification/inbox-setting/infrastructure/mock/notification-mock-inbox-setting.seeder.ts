import { NotificationInboxSetting, notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class NotificationMockInboxSettingSeeder extends MockSeeder<NotificationInboxSetting>
{
    public collectionSource: NotificationInboxSetting[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const inboxSetting of _.orderBy(notificationMockInboxSettingData, ['id']))
        {
            this.collectionSource.push(
                NotificationInboxSetting.register(
                    new NotificationInboxSettingId(inboxSetting.id),
                    new NotificationInboxSettingAccountId(inboxSetting.accountId),
                    new NotificationInboxSettingSort(inboxSetting.sort),
                    new NotificationInboxSettingCreatedAt({ currentTimestamp: true }),
                    new NotificationInboxSettingUpdatedAt({ currentTimestamp: true }),
                    new NotificationInboxSettingDeletedAt(null),
                ),
            );
        }
    }
}
