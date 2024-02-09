import { NotificationAddOutboxesContextEvent, NotificationIOutboxRepository, NotificationOutbox } from '@app/notification/outbox';
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
export class NotificationUpdateOutboxesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        payload: {
            id?: NotificationOutboxId;
            notificationId?: NotificationOutboxNotificationId;
            sort?: NotificationOutboxSort;
            accountRecipientIds?: NotificationOutboxAccountRecipientIds;
            tenantRecipientIds?: NotificationOutboxTenantRecipientIds;
            scopeRecipients?: NotificationOutboxScopeRecipients;
            meta?: NotificationOutboxMeta;
        },
        queryStatement?: QueryStatement,
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

        // update
        await this.repository.update(
            outbox,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const outboxes = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const outboxesRegister = this.publisher.mergeObjectContext(
            new NotificationAddOutboxesContextEvent(outboxes),
        );

        outboxesRegister.updated(); // apply event to model events
        outboxesRegister.commit(); // commit all events of model
    }
}
