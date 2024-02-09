import { NotificationAddInboxSettingsContextEvent, NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpdateAndIncrementInboxSettingsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        payload: {
            id?: NotificationInboxSettingId;
            accountId?: NotificationInboxSettingAccountId;
            sort?: NotificationInboxSettingSort;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const inboxSetting = NotificationInboxSetting.register(
            payload.id,
            payload.accountId,
            payload.sort,
            null, // createdAt
            new NotificationInboxSettingUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update and increment
        await this.repository.updateAndIncrement(
            inboxSetting,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateAndIncrementOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const inboxSettings = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const inboxSettingsRegister = this.publisher.mergeObjectContext(
            new NotificationAddInboxSettingsContextEvent(inboxSettings),
        );

        inboxSettingsRegister.updatedAndIncremented(); // apply event to model events
        inboxSettingsRegister.commit(); // commit all events of model
    }
}
