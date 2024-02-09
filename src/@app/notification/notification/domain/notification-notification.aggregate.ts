/* eslint-disable key-spacing */
import { NotificationCreatedNotificationEvent, NotificationDeletedNotificationEvent, NotificationUpdatedNotificationEvent } from '@app/notification/notification';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopeRecipients,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantIds,
    NotificationNotificationTenantRecipientIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationNotification extends AggregateRoot
{
    id: NotificationNotificationId;
    tenantIds: NotificationNotificationTenantIds;
    status: NotificationNotificationStatus;
    accountRecipientIds: NotificationNotificationAccountRecipientIds;
    tenantRecipientIds: NotificationNotificationTenantRecipientIds;
    scopeRecipients: NotificationNotificationScopeRecipients;
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
        tenantIds: NotificationNotificationTenantIds,
        status: NotificationNotificationStatus,
        accountRecipientIds: NotificationNotificationAccountRecipientIds,
        tenantRecipientIds: NotificationNotificationTenantRecipientIds,
        scopeRecipients: NotificationNotificationScopeRecipients,
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
        this.tenantIds = tenantIds;
        this.status = status;
        this.accountRecipientIds = accountRecipientIds;
        this.tenantRecipientIds = tenantRecipientIds;
        this.scopeRecipients = scopeRecipients;
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
        tenantIds: NotificationNotificationTenantIds,
        status: NotificationNotificationStatus,
        accountRecipientIds: NotificationNotificationAccountRecipientIds,
        tenantRecipientIds: NotificationNotificationTenantRecipientIds,
        scopeRecipients: NotificationNotificationScopeRecipients,
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
            tenantIds,
            status,
            accountRecipientIds,
            tenantRecipientIds,
            scopeRecipients,
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
                notification.tenantIds?.value,
                notification.status.value,
                notification.accountRecipientIds?.value,
                notification.tenantRecipientIds?.value,
                notification.scopeRecipients?.value,
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
                notification.tenantIds?.value,
                notification.status?.value,
                notification.accountRecipientIds?.value,
                notification.tenantRecipientIds?.value,
                notification.scopeRecipients?.value,
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
                notification.tenantIds?.value,
                notification.status.value,
                notification.accountRecipientIds?.value,
                notification.tenantRecipientIds?.value,
                notification.scopeRecipients?.value,
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
            tenantIds: this.tenantIds?.value,
            status: this.status.value,
            accountRecipientIds: this.accountRecipientIds?.value,
            tenantRecipientIds: this.tenantRecipientIds?.value,
            scopeRecipients: this.scopeRecipients?.value,
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
            tenantIds: this.tenantIds?.value,
            status: this.status.value,
            accountRecipientIds: this.accountRecipientIds?.value,
            tenantRecipientIds: this.tenantRecipientIds?.value,
            scopeRecipients: this.scopeRecipients?.value,
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
