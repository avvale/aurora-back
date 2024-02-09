/* eslint-disable key-spacing */
import { NotificationNotification } from '@app/notification/notification';
import { NotificationCreatedOutboxEvent, NotificationDeletedOutboxEvent, NotificationUpdatedOutboxEvent } from '@app/notification/outbox';
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
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationOutbox extends AggregateRoot
{
    id: NotificationOutboxId;
    notificationId: NotificationOutboxNotificationId;
    sort: NotificationOutboxSort;
    accountRecipientIds: NotificationOutboxAccountRecipientIds;
    tenantRecipientIds: NotificationOutboxTenantRecipientIds;
    scopeRecipients: NotificationOutboxScopeRecipients;
    meta: NotificationOutboxMeta;
    createdAt: NotificationOutboxCreatedAt;
    updatedAt: NotificationOutboxUpdatedAt;
    deletedAt: NotificationOutboxDeletedAt;
    notification: NotificationNotification;

    constructor(
        id: NotificationOutboxId,
        notificationId: NotificationOutboxNotificationId,
        sort: NotificationOutboxSort,
        accountRecipientIds: NotificationOutboxAccountRecipientIds,
        tenantRecipientIds: NotificationOutboxTenantRecipientIds,
        scopeRecipients: NotificationOutboxScopeRecipients,
        meta: NotificationOutboxMeta,
        createdAt: NotificationOutboxCreatedAt,
        updatedAt: NotificationOutboxUpdatedAt,
        deletedAt: NotificationOutboxDeletedAt,
        notification?: NotificationNotification,
    )
    {
        super();
        this.id = id;
        this.notificationId = notificationId;
        this.sort = sort;
        this.accountRecipientIds = accountRecipientIds;
        this.tenantRecipientIds = tenantRecipientIds;
        this.scopeRecipients = scopeRecipients;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.notification = notification;
    }

    static register(
        id: NotificationOutboxId,
        notificationId: NotificationOutboxNotificationId,
        sort: NotificationOutboxSort,
        accountRecipientIds: NotificationOutboxAccountRecipientIds,
        tenantRecipientIds: NotificationOutboxTenantRecipientIds,
        scopeRecipients: NotificationOutboxScopeRecipients,
        meta: NotificationOutboxMeta,
        createdAt: NotificationOutboxCreatedAt,
        updatedAt: NotificationOutboxUpdatedAt,
        deletedAt: NotificationOutboxDeletedAt,
        notification?: NotificationNotification,
    ): NotificationOutbox
    {
        return new NotificationOutbox(
            id,
            notificationId,
            sort,
            accountRecipientIds,
            tenantRecipientIds,
            scopeRecipients,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
            notification,
        );
    }

    created(outbox: NotificationOutbox): void
    {
        this.apply(
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
        );
    }

    updated(outbox: NotificationOutbox): void
    {
        this.apply(
            new NotificationUpdatedOutboxEvent(
                outbox.id?.value,
                outbox.notificationId?.value,
                outbox.sort?.value,
                outbox.accountRecipientIds?.value,
                outbox.tenantRecipientIds?.value,
                outbox.scopeRecipients?.value,
                outbox.meta?.value,
                outbox.createdAt?.value,
                outbox.updatedAt?.value,
                outbox.deletedAt?.value,
            ),
        );
    }

    deleted(outbox: NotificationOutbox): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            notificationId: this.notificationId.value,
            sort: this.sort.value,
            accountRecipientIds: this.accountRecipientIds?.value,
            tenantRecipientIds: this.tenantRecipientIds?.value,
            scopeRecipients: this.scopeRecipients?.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            notification: this.notification?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            notificationId: this.notificationId.value,
            sort: this.sort.value,
            accountRecipientIds: this.accountRecipientIds?.value,
            tenantRecipientIds: this.tenantRecipientIds?.value,
            scopeRecipients: this.scopeRecipients?.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            notification: this.notification?.toDTO(),
        };
    }
}
