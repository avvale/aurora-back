/* eslint-disable key-spacing */
import { NotificationCreatedInboxEvent, NotificationDeletedInboxEvent, NotificationUpdatedInboxEvent } from '@app/notification/inbox';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxCreatedAt,
    NotificationInboxDeletedAt,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
    NotificationInboxUpdatedAt,
} from '@app/notification/inbox/domain/value-objects';
import { NotificationNotification } from '@app/notification/notification';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationInbox extends AggregateRoot
{
    id: NotificationInboxId;
    tenantIds: NotificationInboxTenantIds;
    notificationId: NotificationInboxNotificationId;
    sort: NotificationInboxSort;
    accountId: NotificationInboxAccountId;
    accountCode: NotificationInboxAccountCode;
    isImportant: NotificationInboxIsImportant;
    subject: NotificationInboxSubject;
    body: NotificationInboxBody;
    attachments: NotificationInboxAttachments;
    isRead: NotificationInboxIsRead;
    isReadAtLeastOnce: NotificationInboxIsReadAtLeastOnce;
    meta: NotificationInboxMeta;
    createdAt: NotificationInboxCreatedAt;
    updatedAt: NotificationInboxUpdatedAt;
    deletedAt: NotificationInboxDeletedAt;
    notification: NotificationNotification;

    constructor(
        id: NotificationInboxId,
        tenantIds: NotificationInboxTenantIds,
        notificationId: NotificationInboxNotificationId,
        sort: NotificationInboxSort,
        accountId: NotificationInboxAccountId,
        accountCode: NotificationInboxAccountCode,
        isImportant: NotificationInboxIsImportant,
        subject: NotificationInboxSubject,
        body: NotificationInboxBody,
        attachments: NotificationInboxAttachments,
        isRead: NotificationInboxIsRead,
        isReadAtLeastOnce: NotificationInboxIsReadAtLeastOnce,
        meta: NotificationInboxMeta,
        createdAt: NotificationInboxCreatedAt,
        updatedAt: NotificationInboxUpdatedAt,
        deletedAt: NotificationInboxDeletedAt,
        notification?: NotificationNotification,
    )
    {
        super();
        this.id = id;
        this.tenantIds = tenantIds;
        this.notificationId = notificationId;
        this.sort = sort;
        this.accountId = accountId;
        this.accountCode = accountCode;
        this.isImportant = isImportant;
        this.subject = subject;
        this.body = body;
        this.attachments = attachments;
        this.isRead = isRead;
        this.isReadAtLeastOnce = isReadAtLeastOnce;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.notification = notification;
    }

    static register(
        id: NotificationInboxId,
        tenantIds: NotificationInboxTenantIds,
        notificationId: NotificationInboxNotificationId,
        sort: NotificationInboxSort,
        accountId: NotificationInboxAccountId,
        accountCode: NotificationInboxAccountCode,
        isImportant: NotificationInboxIsImportant,
        subject: NotificationInboxSubject,
        body: NotificationInboxBody,
        attachments: NotificationInboxAttachments,
        isRead: NotificationInboxIsRead,
        isReadAtLeastOnce: NotificationInboxIsReadAtLeastOnce,
        meta: NotificationInboxMeta,
        createdAt: NotificationInboxCreatedAt,
        updatedAt: NotificationInboxUpdatedAt,
        deletedAt: NotificationInboxDeletedAt,
        notification?: NotificationNotification,
    ): NotificationInbox
    {
        return new NotificationInbox(
            id,
            tenantIds,
            notificationId,
            sort,
            accountId,
            accountCode,
            isImportant,
            subject,
            body,
            attachments,
            isRead,
            isReadAtLeastOnce,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
            notification,
        );
    }

    created(inbox: NotificationInbox): void
    {
        this.apply(
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
        );
    }

    updated(inbox: NotificationInbox): void
    {
        this.apply(
            new NotificationUpdatedInboxEvent(
                inbox.id?.value,
                inbox.tenantIds?.value,
                inbox.notificationId?.value,
                inbox.sort?.value,
                inbox.accountId?.value,
                inbox.accountCode?.value,
                inbox.isImportant?.value,
                inbox.subject?.value,
                inbox.body?.value,
                inbox.attachments?.value,
                inbox.isRead?.value,
                inbox.isReadAtLeastOnce?.value,
                inbox.meta?.value,
                inbox.createdAt?.value,
                inbox.updatedAt?.value,
                inbox.deletedAt?.value,
            ),
        );
    }

    deleted(inbox: NotificationInbox): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            tenantIds: this.tenantIds?.value,
            notificationId: this.notificationId.value,
            sort: this.sort.value,
            accountId: this.accountId.value,
            accountCode: this.accountCode?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
            isRead: this.isRead.value,
            isReadAtLeastOnce: this.isReadAtLeastOnce.value,
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
            tenantIds: this.tenantIds?.value,
            notificationId: this.notificationId.value,
            sort: this.sort.value,
            accountId: this.accountId.value,
            accountCode: this.accountCode?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
            isRead: this.isRead.value,
            isReadAtLeastOnce: this.isReadAtLeastOnce.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            notification: this.notification?.toDTO(),
        };
    }
}
