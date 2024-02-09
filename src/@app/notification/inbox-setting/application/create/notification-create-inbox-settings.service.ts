import { NotificationAddInboxSettingsContextEvent, NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateInboxSettingsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        payload: {
            id: NotificationInboxSettingId;
            accountId: NotificationInboxSettingAccountId;
            sort: NotificationInboxSettingSort;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateInboxSettings = payload.map(inboxSetting => NotificationInboxSetting.register(
            inboxSetting.id,
            inboxSetting.accountId,
            inboxSetting.sort,
            new NotificationInboxSettingCreatedAt({ currentTimestamp: true }),
            new NotificationInboxSettingUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateInboxSettings,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddInboxSettingsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const inboxSettingsRegistered = this.publisher.mergeObjectContext(new NotificationAddInboxSettingsContextEvent(aggregateInboxSettings));

        inboxSettingsRegistered.created(); // apply event to model events
        inboxSettingsRegistered.commit(); // commit all events of model
    }
}
