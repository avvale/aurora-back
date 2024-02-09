import { NotificationCreatedInboxesEvent, NotificationCreatedInboxEvent, NotificationDeletedInboxesEvent, NotificationDeletedInboxEvent, NotificationInbox, NotificationUpdatedAndIncrementedInboxesEvent, NotificationUpdatedAndIncrementedInboxEvent, NotificationUpdatedInboxesEvent, NotificationUpdatedInboxEvent } from '@app/notification/inbox';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationAddInboxesContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: NotificationInbox[] = [],
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
            new NotificationCreatedInboxesEvent(
                this.aggregateRoots.map(inbox =>
                    new NotificationCreatedInboxEvent(
                        inbox.id.value,
                        inbox.tenantIds?.value,
                        inbox.notificationId.value,
                        inbox.sort.value,
                        inbox.accountId.value,
                        inbox.accountCode?.value,
                        inbox.isImportant.value,
                        inbox.subject.value,
                        inbox.body.value,
                        inbox.attachments?.value,
                        inbox.isRead.value,
                        inbox.isReadAtLeastOnce.value,
                        inbox.meta?.value,
                        inbox.createdAt?.value,
                        inbox.updatedAt?.value,
                        inbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new NotificationUpdatedInboxesEvent(
                this.aggregateRoots.map(inbox =>
                    new NotificationUpdatedInboxEvent(
                        inbox.id.value,
                        inbox.tenantIds?.value,
                        inbox.notificationId.value,
                        inbox.sort.value,
                        inbox.accountId.value,
                        inbox.accountCode?.value,
                        inbox.isImportant.value,
                        inbox.subject.value,
                        inbox.body.value,
                        inbox.attachments?.value,
                        inbox.isRead.value,
                        inbox.isReadAtLeastOnce.value,
                        inbox.meta?.value,
                        inbox.createdAt?.value,
                        inbox.updatedAt?.value,
                        inbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new NotificationUpdatedAndIncrementedInboxesEvent(
                this.aggregateRoots.map(inbox =>
                    new NotificationUpdatedAndIncrementedInboxEvent(
                        inbox.id.value,
                        inbox.tenantIds?.value,
                        inbox.notificationId.value,
                        inbox.sort.value,
                        inbox.accountId.value,
                        inbox.accountCode?.value,
                        inbox.isImportant.value,
                        inbox.subject.value,
                        inbox.body.value,
                        inbox.attachments?.value,
                        inbox.isRead.value,
                        inbox.isReadAtLeastOnce.value,
                        inbox.meta?.value,
                        inbox.createdAt?.value,
                        inbox.updatedAt?.value,
                        inbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new NotificationDeletedInboxesEvent(
                this.aggregateRoots.map(inbox =>
                    new NotificationDeletedInboxEvent(
                        inbox.id.value,
                        inbox.tenantIds?.value,
                        inbox.notificationId.value,
                        inbox.sort.value,
                        inbox.accountId.value,
                        inbox.accountCode?.value,
                        inbox.isImportant.value,
                        inbox.subject.value,
                        inbox.body.value,
                        inbox.attachments?.value,
                        inbox.isRead.value,
                        inbox.isReadAtLeastOnce.value,
                        inbox.meta?.value,
                        inbox.createdAt?.value,
                        inbox.updatedAt?.value,
                        inbox.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
