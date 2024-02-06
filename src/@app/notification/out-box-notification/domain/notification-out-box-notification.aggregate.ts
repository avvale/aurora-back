/* eslint-disable key-spacing */
import { NotificationCreatedOutBoxNotificationEvent, NotificationDeletedOutBoxNotificationEvent, NotificationUpdatedOutBoxNotificationEvent } from '@app/notification/out-box-notification';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationCreatedAt,
    NotificationOutBoxNotificationDeletedAt,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
    NotificationOutBoxNotificationUpdatedAt,
} from '@app/notification/out-box-notification/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class NotificationOutBoxNotification extends AggregateRoot
{
    id: NotificationOutBoxNotificationId;
    sort: NotificationOutBoxNotificationSort;
    tenantId: NotificationOutBoxNotificationTenantId;
    accountIds: NotificationOutBoxNotificationAccountIds;
    accountTenantOperator: NotificationOutBoxNotificationAccountTenantOperator;
    tenantIds: NotificationOutBoxNotificationTenantIds;
    scopes: NotificationOutBoxNotificationScopes;
    isImportant: NotificationOutBoxNotificationIsImportant;
    subject: NotificationOutBoxNotificationSubject;
    body: NotificationOutBoxNotificationBody;
    attachments: NotificationOutBoxNotificationAttachments;
    meta: NotificationOutBoxNotificationMeta;
    createdAt: NotificationOutBoxNotificationCreatedAt;
    updatedAt: NotificationOutBoxNotificationUpdatedAt;
    deletedAt: NotificationOutBoxNotificationDeletedAt;

    constructor(
        id: NotificationOutBoxNotificationId,
        sort: NotificationOutBoxNotificationSort,
        tenantId: NotificationOutBoxNotificationTenantId,
        accountIds: NotificationOutBoxNotificationAccountIds,
        accountTenantOperator: NotificationOutBoxNotificationAccountTenantOperator,
        tenantIds: NotificationOutBoxNotificationTenantIds,
        scopes: NotificationOutBoxNotificationScopes,
        isImportant: NotificationOutBoxNotificationIsImportant,
        subject: NotificationOutBoxNotificationSubject,
        body: NotificationOutBoxNotificationBody,
        attachments: NotificationOutBoxNotificationAttachments,
        meta: NotificationOutBoxNotificationMeta,
        createdAt: NotificationOutBoxNotificationCreatedAt,
        updatedAt: NotificationOutBoxNotificationUpdatedAt,
        deletedAt: NotificationOutBoxNotificationDeletedAt,
    )
    {
        super();
        this.id = id;
        this.sort = sort;
        this.tenantId = tenantId;
        this.accountIds = accountIds;
        this.accountTenantOperator = accountTenantOperator;
        this.tenantIds = tenantIds;
        this.scopes = scopes;
        this.isImportant = isImportant;
        this.subject = subject;
        this.body = body;
        this.attachments = attachments;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: NotificationOutBoxNotificationId,
        sort: NotificationOutBoxNotificationSort,
        tenantId: NotificationOutBoxNotificationTenantId,
        accountIds: NotificationOutBoxNotificationAccountIds,
        accountTenantOperator: NotificationOutBoxNotificationAccountTenantOperator,
        tenantIds: NotificationOutBoxNotificationTenantIds,
        scopes: NotificationOutBoxNotificationScopes,
        isImportant: NotificationOutBoxNotificationIsImportant,
        subject: NotificationOutBoxNotificationSubject,
        body: NotificationOutBoxNotificationBody,
        attachments: NotificationOutBoxNotificationAttachments,
        meta: NotificationOutBoxNotificationMeta,
        createdAt: NotificationOutBoxNotificationCreatedAt,
        updatedAt: NotificationOutBoxNotificationUpdatedAt,
        deletedAt: NotificationOutBoxNotificationDeletedAt,
    ): NotificationOutBoxNotification
    {
        return new NotificationOutBoxNotification(
            id,
            sort,
            tenantId,
            accountIds,
            accountTenantOperator,
            tenantIds,
            scopes,
            isImportant,
            subject,
            body,
            attachments,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(outBoxNotification: NotificationOutBoxNotification): void
    {
        this.apply(
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
        );
    }

    updated(outBoxNotification: NotificationOutBoxNotification): void
    {
        this.apply(
            new NotificationUpdatedOutBoxNotificationEvent(
                outBoxNotification.id?.value,
                outBoxNotification.sort?.value,
                outBoxNotification.tenantId?.value,
                outBoxNotification.accountIds?.value,
                outBoxNotification.accountTenantOperator?.value,
                outBoxNotification.tenantIds?.value,
                outBoxNotification.scopes?.value,
                outBoxNotification.isImportant?.value,
                outBoxNotification.subject?.value,
                outBoxNotification.body?.value,
                outBoxNotification.attachments?.value,
                outBoxNotification.meta?.value,
                outBoxNotification.createdAt?.value,
                outBoxNotification.updatedAt?.value,
                outBoxNotification.deletedAt?.value,
            ),
        );
    }

    deleted(outBoxNotification: NotificationOutBoxNotification): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            sort: this.sort.value,
            tenantId: this.tenantId?.value,
            accountIds: this.accountIds?.value,
            accountTenantOperator: this.accountTenantOperator?.value,
            tenantIds: this.tenantIds?.value,
            scopes: this.scopes?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
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
            sort: this.sort.value,
            tenantId: this.tenantId?.value,
            accountIds: this.accountIds?.value,
            accountTenantOperator: this.accountTenantOperator?.value,
            tenantIds: this.tenantIds?.value,
            scopes: this.scopes?.value,
            isImportant: this.isImportant.value,
            subject: this.subject.value,
            body: this.body.value,
            attachments: this.attachments?.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
