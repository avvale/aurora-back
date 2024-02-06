import { NotificationCreatedOutBoxNotificationEvent, NotificationCreatedOutBoxNotificationsEvent, NotificationDeletedOutBoxNotificationEvent, NotificationDeletedOutBoxNotificationsEvent, NotificationOutBoxNotification, NotificationUpdatedAndIncrementedOutBoxNotificationEvent, NotificationUpdatedAndIncrementedOutBoxNotificationsEvent, NotificationUpdatedOutBoxNotificationEvent, NotificationUpdatedOutBoxNotificationsEvent } from '@app/notification/out-box-notification';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationAddOutBoxNotificationsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: NotificationOutBoxNotification[] = [],
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
            new NotificationCreatedOutBoxNotificationsEvent(
                this.aggregateRoots.map(outBoxNotification =>
                    new NotificationCreatedOutBoxNotificationEvent(
                        outBoxNotification.id.value,
                        outBoxNotification.sort.value,
                        outBoxNotification.tenantId?.value,
                        outBoxNotification.accountIds?.value,
                        outBoxNotification.accountTenantOperator?.value,
                        outBoxNotification.tenantIds?.value,
                        outBoxNotification.scopes?.value,
                        outBoxNotification.isImportant.value,
                        outBoxNotification.subject.value,
                        outBoxNotification.body.value,
                        outBoxNotification.attachments?.value,
                        outBoxNotification.meta?.value,
                        outBoxNotification.createdAt?.value,
                        outBoxNotification.updatedAt?.value,
                        outBoxNotification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new NotificationUpdatedOutBoxNotificationsEvent(
                this.aggregateRoots.map(outBoxNotification =>
                    new NotificationUpdatedOutBoxNotificationEvent(
                        outBoxNotification.id.value,
                        outBoxNotification.sort.value,
                        outBoxNotification.tenantId?.value,
                        outBoxNotification.accountIds?.value,
                        outBoxNotification.accountTenantOperator?.value,
                        outBoxNotification.tenantIds?.value,
                        outBoxNotification.scopes?.value,
                        outBoxNotification.isImportant.value,
                        outBoxNotification.subject.value,
                        outBoxNotification.body.value,
                        outBoxNotification.attachments?.value,
                        outBoxNotification.meta?.value,
                        outBoxNotification.createdAt?.value,
                        outBoxNotification.updatedAt?.value,
                        outBoxNotification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new NotificationUpdatedAndIncrementedOutBoxNotificationsEvent(
                this.aggregateRoots.map(outBoxNotification =>
                    new NotificationUpdatedAndIncrementedOutBoxNotificationEvent(
                        outBoxNotification.id.value,
                        outBoxNotification.sort.value,
                        outBoxNotification.tenantId?.value,
                        outBoxNotification.accountIds?.value,
                        outBoxNotification.accountTenantOperator?.value,
                        outBoxNotification.tenantIds?.value,
                        outBoxNotification.scopes?.value,
                        outBoxNotification.isImportant.value,
                        outBoxNotification.subject.value,
                        outBoxNotification.body.value,
                        outBoxNotification.attachments?.value,
                        outBoxNotification.meta?.value,
                        outBoxNotification.createdAt?.value,
                        outBoxNotification.updatedAt?.value,
                        outBoxNotification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new NotificationDeletedOutBoxNotificationsEvent(
                this.aggregateRoots.map(outBoxNotification =>
                    new NotificationDeletedOutBoxNotificationEvent(
                        outBoxNotification.id.value,
                        outBoxNotification.sort.value,
                        outBoxNotification.tenantId?.value,
                        outBoxNotification.accountIds?.value,
                        outBoxNotification.accountTenantOperator?.value,
                        outBoxNotification.tenantIds?.value,
                        outBoxNotification.scopes?.value,
                        outBoxNotification.isImportant.value,
                        outBoxNotification.subject.value,
                        outBoxNotification.body.value,
                        outBoxNotification.attachments?.value,
                        outBoxNotification.meta?.value,
                        outBoxNotification.createdAt?.value,
                        outBoxNotification.updatedAt?.value,
                        outBoxNotification.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
