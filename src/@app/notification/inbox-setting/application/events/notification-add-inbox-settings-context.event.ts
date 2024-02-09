import { NotificationCreatedInboxSettingEvent, NotificationCreatedInboxSettingsEvent, NotificationDeletedInboxSettingEvent, NotificationDeletedInboxSettingsEvent, NotificationInboxSetting, NotificationUpdatedAndIncrementedInboxSettingEvent, NotificationUpdatedAndIncrementedInboxSettingsEvent, NotificationUpdatedInboxSettingEvent, NotificationUpdatedInboxSettingsEvent } from '@app/notification/inbox-setting';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationAddInboxSettingsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: NotificationInboxSetting[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new NotificationCreatedInboxSettingsEvent(
                this.aggregateRoots.map(inboxSetting =>
                    new NotificationCreatedInboxSettingEvent(
                        inboxSetting.id.value,
                        inboxSetting.accountId.value,
                        inboxSetting.sort.value,
                        inboxSetting.createdAt?.value,
                        inboxSetting.updatedAt?.value,
                        inboxSetting.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new NotificationUpdatedInboxSettingsEvent(
                this.aggregateRoots.map(inboxSetting =>
                    new NotificationUpdatedInboxSettingEvent(
                        inboxSetting.id.value,
                        inboxSetting.accountId.value,
                        inboxSetting.sort.value,
                        inboxSetting.createdAt?.value,
                        inboxSetting.updatedAt?.value,
                        inboxSetting.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new NotificationUpdatedAndIncrementedInboxSettingsEvent(
                this.aggregateRoots.map(inboxSetting =>
                    new NotificationUpdatedAndIncrementedInboxSettingEvent(
                        inboxSetting.id.value,
                        inboxSetting.accountId.value,
                        inboxSetting.sort.value,
                        inboxSetting.createdAt?.value,
                        inboxSetting.updatedAt?.value,
                        inboxSetting.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new NotificationDeletedInboxSettingsEvent(
                this.aggregateRoots.map(inboxSetting =>
                    new NotificationDeletedInboxSettingEvent(
                        inboxSetting.id.value,
                        inboxSetting.accountId.value,
                        inboxSetting.sort.value,
                        inboxSetting.createdAt?.value,
                        inboxSetting.updatedAt?.value,
                        inboxSetting.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
