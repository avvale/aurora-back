import { NotificationCreatedOutboxesEvent, NotificationCreatedOutboxEvent, NotificationDeletedOutboxesEvent, NotificationDeletedOutboxEvent, NotificationOutbox, NotificationUpdatedAndIncrementedOutboxesEvent, NotificationUpdatedAndIncrementedOutboxEvent, NotificationUpdatedOutboxesEvent, NotificationUpdatedOutboxEvent } from '@app/notification/outbox';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationAddOutboxesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: NotificationOutbox[] = [],
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
            new NotificationCreatedOutboxesEvent(
                this.aggregateRoots.map(outbox =>
                    new NotificationCreatedOutboxEvent(
                        outbox.id.value,
                        outbox.notificationId.value,
                        outbox.sort.value,
                        outbox.accountRecipientIds?.value,
                        outbox.tenantRecipientIds?.value,
                        outbox.scopeRecipients?.value,
                        outbox.meta?.value,
                        outbox.createdAt?.value,
                        outbox.updatedAt?.value,
                        outbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new NotificationUpdatedOutboxesEvent(
                this.aggregateRoots.map(outbox =>
                    new NotificationUpdatedOutboxEvent(
                        outbox.id.value,
                        outbox.notificationId.value,
                        outbox.sort.value,
                        outbox.accountRecipientIds?.value,
                        outbox.tenantRecipientIds?.value,
                        outbox.scopeRecipients?.value,
                        outbox.meta?.value,
                        outbox.createdAt?.value,
                        outbox.updatedAt?.value,
                        outbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new NotificationUpdatedAndIncrementedOutboxesEvent(
                this.aggregateRoots.map(outbox =>
                    new NotificationUpdatedAndIncrementedOutboxEvent(
                        outbox.id.value,
                        outbox.notificationId.value,
                        outbox.sort.value,
                        outbox.accountRecipientIds?.value,
                        outbox.tenantRecipientIds?.value,
                        outbox.scopeRecipients?.value,
                        outbox.meta?.value,
                        outbox.createdAt?.value,
                        outbox.updatedAt?.value,
                        outbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new NotificationDeletedOutboxesEvent(
                this.aggregateRoots.map(outbox =>
                    new NotificationDeletedOutboxEvent(
                        outbox.id.value,
                        outbox.notificationId.value,
                        outbox.sort.value,
                        outbox.accountRecipientIds?.value,
                        outbox.tenantRecipientIds?.value,
                        outbox.scopeRecipients?.value,
                        outbox.meta?.value,
                        outbox.createdAt?.value,
                        outbox.updatedAt?.value,
                        outbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
