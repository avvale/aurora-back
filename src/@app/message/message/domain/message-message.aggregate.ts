/* eslint-disable key-spacing */
import { MessageCreatedMessageEvent, MessageDeletedMessageEvent, MessageUpdatedMessageEvent } from '@app/message/message';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
    MessageMessageCreatedAt,
    MessageMessageDeletedAt,
    MessageMessageDescription,
    MessageMessageIcon,
    MessageMessageId,
    MessageMessageImage,
    MessageMessageIsImportant,
    MessageMessageIsInternalLink,
    MessageMessageLink,
    MessageMessageMeta,
    MessageMessageReads,
    MessageMessageScopeRecipients,
    MessageMessageSendAt,
    MessageMessageStatus,
    MessageMessageTenantIds,
    MessageMessageTenantRecipientIds,
    MessageMessageTitle,
    MessageMessageTotalRecipients,
    MessageMessageUpdatedAt,
} from '@app/message/message/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class MessageMessage extends AggregateRoot
{
    id: MessageMessageId;
    tenantIds: MessageMessageTenantIds;
    status: MessageMessageStatus;
    accountRecipientIds: MessageMessageAccountRecipientIds;
    tenantRecipientIds: MessageMessageTenantRecipientIds;
    scopeRecipients: MessageMessageScopeRecipients;
    sendAt: MessageMessageSendAt;
    isImportant: MessageMessageIsImportant;
    title: MessageMessageTitle;
    description: MessageMessageDescription;
    link: MessageMessageLink;
    isInternalLink: MessageMessageIsInternalLink;
    image: MessageMessageImage;
    icon: MessageMessageIcon;
    attachments: MessageMessageAttachments;
    totalRecipients: MessageMessageTotalRecipients;
    reads: MessageMessageReads;
    meta: MessageMessageMeta;
    createdAt: MessageMessageCreatedAt;
    updatedAt: MessageMessageUpdatedAt;
    deletedAt: MessageMessageDeletedAt;

    constructor(
        id: MessageMessageId,
        tenantIds: MessageMessageTenantIds,
        status: MessageMessageStatus,
        accountRecipientIds: MessageMessageAccountRecipientIds,
        tenantRecipientIds: MessageMessageTenantRecipientIds,
        scopeRecipients: MessageMessageScopeRecipients,
        sendAt: MessageMessageSendAt,
        isImportant: MessageMessageIsImportant,
        title: MessageMessageTitle,
        description: MessageMessageDescription,
        link: MessageMessageLink,
        isInternalLink: MessageMessageIsInternalLink,
        image: MessageMessageImage,
        icon: MessageMessageIcon,
        attachments: MessageMessageAttachments,
        totalRecipients: MessageMessageTotalRecipients,
        reads: MessageMessageReads,
        meta: MessageMessageMeta,
        createdAt: MessageMessageCreatedAt,
        updatedAt: MessageMessageUpdatedAt,
        deletedAt: MessageMessageDeletedAt,
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
        this.title = title;
        this.description = description;
        this.link = link;
        this.isInternalLink = isInternalLink;
        this.image = image;
        this.icon = icon;
        this.attachments = attachments;
        this.totalRecipients = totalRecipients;
        this.reads = reads;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: MessageMessageId,
        tenantIds: MessageMessageTenantIds,
        status: MessageMessageStatus,
        accountRecipientIds: MessageMessageAccountRecipientIds,
        tenantRecipientIds: MessageMessageTenantRecipientIds,
        scopeRecipients: MessageMessageScopeRecipients,
        sendAt: MessageMessageSendAt,
        isImportant: MessageMessageIsImportant,
        title: MessageMessageTitle,
        description: MessageMessageDescription,
        link: MessageMessageLink,
        isInternalLink: MessageMessageIsInternalLink,
        image: MessageMessageImage,
        icon: MessageMessageIcon,
        attachments: MessageMessageAttachments,
        totalRecipients: MessageMessageTotalRecipients,
        reads: MessageMessageReads,
        meta: MessageMessageMeta,
        createdAt: MessageMessageCreatedAt,
        updatedAt: MessageMessageUpdatedAt,
        deletedAt: MessageMessageDeletedAt,
    ): MessageMessage
    {
        return new MessageMessage(
            id,
            tenantIds,
            status,
            accountRecipientIds,
            tenantRecipientIds,
            scopeRecipients,
            sendAt,
            isImportant,
            title,
            description,
            link,
            isInternalLink,
            image,
            icon,
            attachments,
            totalRecipients,
            reads,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(message: MessageMessage): void
    {
        this.apply(
            new MessageCreatedMessageEvent(
                message.id.value,
                message.tenantIds?.value,
                message.status.value,
                message.accountRecipientIds?.value,
                message.tenantRecipientIds?.value,
                message.scopeRecipients?.value,
                message.sendAt?.value,
                message.isImportant.value,
                message.title.value,
                message.description.value,
                message.link?.value,
                message.isInternalLink?.value,
                message.image?.value,
                message.icon?.value,
                message.attachments?.value,
                message.totalRecipients.value,
                message.reads.value,
                message.meta?.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
            ),
        );
    }

    updated(message: MessageMessage): void
    {
        this.apply(
            new MessageUpdatedMessageEvent(
                message.id?.value,
                message.tenantIds?.value,
                message.status?.value,
                message.accountRecipientIds?.value,
                message.tenantRecipientIds?.value,
                message.scopeRecipients?.value,
                message.sendAt?.value,
                message.isImportant?.value,
                message.title?.value,
                message.description?.value,
                message.link?.value,
                message.isInternalLink?.value,
                message.image?.value,
                message.icon?.value,
                message.attachments?.value,
                message.totalRecipients?.value,
                message.reads?.value,
                message.meta?.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
            ),
        );
    }

    deleted(message: MessageMessage): void
    {
        this.apply(
            new MessageDeletedMessageEvent(
                message.id.value,
                message.tenantIds?.value,
                message.status.value,
                message.accountRecipientIds?.value,
                message.tenantRecipientIds?.value,
                message.scopeRecipients?.value,
                message.sendAt?.value,
                message.isImportant.value,
                message.title.value,
                message.description.value,
                message.link?.value,
                message.isInternalLink?.value,
                message.image?.value,
                message.icon?.value,
                message.attachments?.value,
                message.totalRecipients.value,
                message.reads.value,
                message.meta?.value,
                message.createdAt?.value,
                message.updatedAt?.value,
                message.deletedAt?.value,
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
            title: this.title.value,
            description: this.description.value,
            link: this.link?.value,
            isInternalLink: this.isInternalLink?.value,
            image: this.image?.value,
            icon: this.icon?.value,
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
            title: this.title.value,
            description: this.description.value,
            link: this.link?.value,
            isInternalLink: this.isInternalLink?.value,
            image: this.image?.value,
            icon: this.icon?.value,
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
