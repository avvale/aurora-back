import { NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
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
export class NotificationUpdateInboxSettingByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        payload: {
            id: NotificationInboxSettingId;
            accountId?: NotificationInboxSettingAccountId;
            sort?: NotificationInboxSettingSort;
        },
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

        // update by id
        await this.repository.updateById(
            inboxSetting,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const inboxSettingRegister = this.publisher.mergeObjectContext(
            inboxSetting,
        );

        inboxSettingRegister.updated(inboxSetting); // apply event to model events
        inboxSettingRegister.commit(); // commit all events of model
    }
}
