import { NotificationCreatedNotificationEvent, NotificationCreatedNotificationsEvent, NotificationDeletedNotificationEvent, NotificationDeletedNotificationsEvent, NotificationNotification, NotificationUpdatedAndIncrementedNotificationEvent, NotificationUpdatedAndIncrementedNotificationsEvent, NotificationUpdatedNotificationEvent, NotificationUpdatedNotificationsEvent } from '@app/notification/notification';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationAddNotificationsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: NotificationNotification[] = [],
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
            new NotificationCreatedNotificationsEvent(
                this.aggregateRoots.map(notification =>
                    new NotificationCreatedNotificationEvent(
                        notification.id.value,
                        notification.tenantId?.value,
                        notification.status.value,
                        notification.accountIds?.value,
                        notification.tenantIds?.value,
                        notification.scopes?.value,
                        notification.sendAt?.value,
                        notification.isImportant.value,
                        notification.subject.value,
                        notification.body.value,
                        notification.attachments?.value,
                        notification.totalRecipients.value,
                        notification.reads.value,
                        notification.meta?.value,
                        notification.createdAt?.value,
                        notification.updatedAt?.value,
                        notification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new NotificationUpdatedNotificationsEvent(
                this.aggregateRoots.map(notification =>
                    new NotificationUpdatedNotificationEvent(
                        notification.id.value,
                        notification.tenantId?.value,
                        notification.status.value,
                        notification.accountIds?.value,
                        notification.tenantIds?.value,
                        notification.scopes?.value,
                        notification.sendAt?.value,
                        notification.isImportant.value,
                        notification.subject.value,
                        notification.body.value,
                        notification.attachments?.value,
                        notification.totalRecipients.value,
                        notification.reads.value,
                        notification.meta?.value,
                        notification.createdAt?.value,
                        notification.updatedAt?.value,
                        notification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new NotificationUpdatedAndIncrementedNotificationsEvent(
                this.aggregateRoots.map(notification =>
                    new NotificationUpdatedAndIncrementedNotificationEvent(
                        notification.id.value,
                        notification.tenantId?.value,
                        notification.status.value,
                        notification.accountIds?.value,
                        notification.tenantIds?.value,
                        notification.scopes?.value,
                        notification.sendAt?.value,
                        notification.isImportant.value,
                        notification.subject.value,
                        notification.body.value,
                        notification.attachments?.value,
                        notification.totalRecipients.value,
                        notification.reads.value,
                        notification.meta?.value,
                        notification.createdAt?.value,
                        notification.updatedAt?.value,
                        notification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new NotificationDeletedNotificationsEvent(
                this.aggregateRoots.map(notification =>
                    new NotificationDeletedNotificationEvent(
                        notification.id.value,
                        notification.tenantId?.value,
                        notification.status.value,
                        notification.accountIds?.value,
                        notification.tenantIds?.value,
                        notification.scopes?.value,
                        notification.sendAt?.value,
                        notification.isImportant.value,
                        notification.subject.value,
                        notification.body.value,
                        notification.attachments?.value,
                        notification.totalRecipients.value,
                        notification.reads.value,
                        notification.meta?.value,
                        notification.createdAt?.value,
                        notification.updatedAt?.value,
                        notification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
