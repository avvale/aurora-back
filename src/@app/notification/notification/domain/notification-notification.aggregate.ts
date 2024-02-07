/* eslint-disable key-spacing */
import { NotificationCreatedNotificationEvent, NotificationDeletedNotificationEvent, NotificationUpdatedNotificationEvent } from '@app/notification/notification';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopes,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantId,
    NotificationNotificationTenantIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationNotification extends AggregateRoot
{
    id: NotificationNotificationId;
    tenantId: NotificationNotificationTenantId;
    status: NotificationNotificationStatus;
    accountIds: NotificationNotificationAccountIds;
    tenantIds: NotificationNotificationTenantIds;
    scopes: NotificationNotificationScopes;
    sendAt: NotificationNotificationSendAt;
    isImportant: NotificationNotificationIsImportant;
    subject: NotificationNotificationSubject;
    body: NotificationNotificationBody;
    attachments: NotificationNotificationAttachments;
    totalRecipients: NotificationNotificationTotalRecipients;
    reads: NotificationNotificationReads;
    meta: NotificationNotificationMeta;
    createdAt: NotificationNotificationCreatedAt;
    updatedAt: NotificationNotificationUpdatedAt;
    deletedAt: NotificationNotificationDeletedAt;

    constructor(
        id: NotificationNotificationId,
        tenantId: NotificationNotificationTenantId,
        status: NotificationNotificationStatus,
        accountIds: NotificationNotificationAccountIds,
        tenantIds: NotificationNotificationTenantIds,
        scopes: NotificationNotificationScopes,
        sendAt: NotificationNotificationSendAt,
        isImportant: NotificationNotificationIsImportant,
        subject: NotificationNotificationSubject,
        body: NotificationNotificationBody,
        attachments: NotificationNotificationAttachments,
        totalRecipients: NotificationNotificationTotalRecipients,
        reads: NotificationNotificationReads,
        meta: NotificationNotificationMeta,
        createdAt: NotificationNotificationCreatedAt,
        updatedAt: NotificationNotificationUpdatedAt,
        deletedAt: NotificationNotificationDeletedAt,
    )
    {
        super();
        this.id = id;
        this.tenantId = tenantId;
        this.status = status;
        this.accountIds = accountIds;
        this.tenantIds = tenantIds;
        this.scopes = scopes;
        this.sendAt = sendAt;
        this.isImportant = isImportant;
        this.subject = subject;
        this.body = body;
        this.attachments = attachments;
        this.totalRecipients = totalRecipients;
        this.reads = reads;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: NotificationNotificationId,
        tenantId: NotificationNotificationTenantId,
        status: NotificationNotificationStatus,
        accountIds: NotificationNotificationAccountIds,
        tenantIds: NotificationNotificationTenantIds,
        scopes: NotificationNotificationScopes,
        sendAt: NotificationNotificationSendAt,
        isImportant: NotificationNotificationIsImportant,
        subject: NotificationNotificationSubject,
        body: NotificationNotificationBody,
        attachments: NotificationNotificationAttachments,
        totalRecipients: NotificationNotificationTotalRecipients,
        reads: NotificationNotificationReads,
        meta: NotificationNotificationMeta,
        createdAt: NotificationNotificationCreatedAt,
        updatedAt: NotificationNotificationUpdatedAt,
        deletedAt: NotificationNotificationDeletedAt,
    ): NotificationNotification
    {
        return new NotificationNotification(
            id,
            tenantId,
            status,
            accountIds,
            tenantIds,
            scopes,
            sendAt,
            isImportant,
            subject,
            body,
            attachments,
            totalRecipients,
            reads,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(notification: NotificationNotification): void
    {
        this.apply(
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
        );
    }

    updated(notification: NotificationNotification): void
    {
        this.apply(
            new NotificationUpdatedNotificationEvent(
                notification.id?.value,
                notification.tenantId?.value,
                notification.status?.value,
                notification.accountIds?.value,
                notification.tenantIds?.value,
                notification.scopes?.value,
                notification.sendAt?.value,
                notification.isImportant?.value,
                notification.subject?.value,
                notification.body?.value,
                notification.attachments?.value,
                notification.totalRecipients?.value,
                notification.reads?.value,
                notification.meta?.value,
                notification.createdAt?.value,
                notification.updatedAt?.value,
                notification.deletedAt?.value,
            ),
        );
    }

    deleted(notification: NotificationNotification): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            tenantId: this.tenantId?.value,
            status: this.status.value,
            accountIds: this.accountIds?.value,
            tenantIds: this.tenantIds?.value,
            scopes: this.scopes?.value,
            sendAt: this.sendAt?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
            totalRecipients: this.totalRecipients.value,
            reads: this.reads.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            tenantId: this.tenantId?.value,
            status: this.status.value,
            accountIds: this.accountIds?.value,
            tenantIds: this.tenantIds?.value,
            scopes: this.scopes?.value,
            sendAt: this.sendAt?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
            totalRecipients: this.totalRecipients.value,
            reads: this.reads.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
