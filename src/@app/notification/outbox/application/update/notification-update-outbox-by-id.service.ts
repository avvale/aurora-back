import { NotificationIOutboxRepository, NotificationOutbox } from '@app/notification/outbox';
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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpdateOutboxByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        payload: {
            id: NotificationOutboxId;
            notificationId?: NotificationOutboxNotificationId;
            sort?: NotificationOutboxSort;
            accountRecipientIds?: NotificationOutboxAccountRecipientIds;
            tenantRecipientIds?: NotificationOutboxTenantRecipientIds;
            scopeRecipients?: NotificationOutboxScopeRecipients;
            meta?: NotificationOutboxMeta;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const outbox = NotificationOutbox.register(
            payload.id,
            payload.notificationId,
            payload.sort,
            payload.accountRecipientIds,
            payload.tenantRecipientIds,
            payload.scopeRecipients,
            payload.meta,
            null, // createdAt
            new NotificationOutboxUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            outbox,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const outboxRegister = this.publisher.mergeObjectContext(
            outbox,
        );

        outboxRegister.updated(outbox); // apply event to model events
        outboxRegister.commit(); // commit all events of model
    }
}
