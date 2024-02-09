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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateOutboxesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        payload: {
            id: NotificationOutboxId;
            notificationId: NotificationOutboxNotificationId;
            sort: NotificationOutboxSort;
            accountRecipientIds: NotificationOutboxAccountRecipientIds;
            tenantRecipientIds: NotificationOutboxTenantRecipientIds;
            scopeRecipients: NotificationOutboxScopeRecipients;
            meta: NotificationOutboxMeta;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateOutboxes = payload.map(outbox => NotificationOutbox.register(
            outbox.id,
            outbox.notificationId,
            outbox.sort,
            outbox.accountRecipientIds,
            outbox.tenantRecipientIds,
            outbox.scopeRecipients,
            outbox.meta,
            new NotificationOutboxCreatedAt({ currentTimestamp: true }),
            new NotificationOutboxUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateOutboxes,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddOutboxesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const outboxesRegistered = this.publisher.mergeObjectContext(new NotificationAddOutboxesContextEvent(aggregateOutboxes));

        outboxesRegistered.created(); // apply event to model events
        outboxesRegistered.commit(); // commit all events of model
    }
}
