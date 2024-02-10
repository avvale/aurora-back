/* eslint-disable key-spacing */
import { MessageCreatedMessageEvent, MessageDeletedMessageEvent, MessageUpdatedMessageEvent } from '@app/message/message';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
    MessageMessageBody,
    MessageMessageCreatedAt,
    MessageMessageDeletedAt,
    MessageMessageId,
    MessageMessageIsImportant,
    MessageMessageMeta,
    MessageMessageReads,
    MessageMessageScopeRecipients,
    MessageMessageSendAt,
    MessageMessageStatus,
    MessageMessageSubject,
    MessageMessageTenantIds,
    MessageMessageTenantRecipientIds,
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
    subject: MessageMessageSubject;
    body: MessageMessageBody;
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
        subject: MessageMessageSubject,
        body: MessageMessageBody,
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
        id: MessageMessageId,
        tenantIds: MessageMessageTenantIds,
        status: MessageMessageStatus,
        accountRecipientIds: MessageMessageAccountRecipientIds,
        tenantRecipientIds: MessageMessageTenantRecipientIds,
        scopeRecipients: MessageMessageScopeRecipients,
        sendAt: MessageMessageSendAt,
        isImportant: MessageMessageIsImportant,
        subject: MessageMessageSubject,
        body: MessageMessageBody,
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
                message.subject.value,
                message.body.value,
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
                message.subject?.value,
                message.body?.value,
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
                message.subject.value,
                message.body.value,
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
