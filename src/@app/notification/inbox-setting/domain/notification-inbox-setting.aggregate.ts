/* eslint-disable key-spacing */
import { NotificationCreatedInboxSettingEvent, NotificationDeletedInboxSettingEvent, NotificationUpdatedInboxSettingEvent } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationInboxSetting extends AggregateRoot
{
    id: NotificationInboxSettingId;
    accountId: NotificationInboxSettingAccountId;
    sort: NotificationInboxSettingSort;
    createdAt: NotificationInboxSettingCreatedAt;
    updatedAt: NotificationInboxSettingUpdatedAt;
    deletedAt: NotificationInboxSettingDeletedAt;

    constructor(
        id: NotificationInboxSettingId,
        accountId: NotificationInboxSettingAccountId,
        sort: NotificationInboxSettingSort,
        createdAt: NotificationInboxSettingCreatedAt,
        updatedAt: NotificationInboxSettingUpdatedAt,
        deletedAt: NotificationInboxSettingDeletedAt,
    )
    {
        super();
        this.id = id;
        this.accountId = accountId;
        this.sort = sort;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: NotificationInboxSettingId,
        accountId: NotificationInboxSettingAccountId,
        sort: NotificationInboxSettingSort,
        createdAt: NotificationInboxSettingCreatedAt,
        updatedAt: NotificationInboxSettingUpdatedAt,
        deletedAt: NotificationInboxSettingDeletedAt,
    ): NotificationInboxSetting
    {
        return new NotificationInboxSetting(
            id,
            accountId,
            sort,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(inboxSetting: NotificationInboxSetting): void
    {
        this.apply(
            new NotificationCreatedInboxSettingEvent(
                inboxSetting.id.value,
                inboxSetting.accountId.value,
                inboxSetting.sort.value,
                inboxSetting.createdAt?.value,
                inboxSetting.updatedAt?.value,
                inboxSetting.deletedAt?.value,
            ),
        );
    }

    updated(inboxSetting: NotificationInboxSetting): void
    {
        this.apply(
            new NotificationUpdatedInboxSettingEvent(
                inboxSetting.id?.value,
                inboxSetting.accountId?.value,
                inboxSetting.sort?.value,
                inboxSetting.createdAt?.value,
                inboxSetting.updatedAt?.value,
                inboxSetting.deletedAt?.value,
            ),
        );
    }

    deleted(inboxSetting: NotificationInboxSetting): void
    {
        this.apply(
            new NotificationDeletedInboxSettingEvent(
                inboxSetting.id.value,
                inboxSetting.accountId.value,
                inboxSetting.sort.value,
                inboxSetting.createdAt?.value,
                inboxSetting.updatedAt?.value,
                inboxSetting.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            accountId: this.accountId.value,
            sort: this.sort.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            accountId: this.accountId.value,
            sort: this.sort.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
