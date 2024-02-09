import { NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpsertInboxSettingService
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
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const inboxSetting = NotificationInboxSetting.register(
            payload.id,
            payload.accountId,
            payload.sort,
            new NotificationInboxSettingCreatedAt({ currentTimestamp: true }),
            new NotificationInboxSettingUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                inboxSetting,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const inboxSettingRegister = this.publisher.mergeObjectContext(
            inboxSetting,
        );

        inboxSettingRegister.created(inboxSetting); // apply event to model events
        inboxSettingRegister.commit(); // commit all events of model
    }
}
