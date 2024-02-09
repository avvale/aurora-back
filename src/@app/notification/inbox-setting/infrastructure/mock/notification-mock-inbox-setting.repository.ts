import { NotificationIInboxSettingRepository, NotificationInboxSetting, notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationMockInboxSettingRepository extends MockRepository<NotificationInboxSetting> implements NotificationIInboxSettingRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'NotificationInboxSetting';
    public collectionSource: NotificationInboxSetting[];

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

        for (const itemCollection of <any[]>notificationMockInboxSettingData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(NotificationInboxSetting.register(
                new NotificationInboxSettingId(itemCollection.id),
                new NotificationInboxSettingAccountId(itemCollection.accountId),
                new NotificationInboxSettingSort(itemCollection.sort),
                new NotificationInboxSettingCreatedAt(itemCollection.createdAt),
                new NotificationInboxSettingUpdatedAt(itemCollection.updatedAt),
                new NotificationInboxSettingDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
