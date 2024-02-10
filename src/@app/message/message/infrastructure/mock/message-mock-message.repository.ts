import { MessageIMessageRepository, MessageMessage, messageMockMessageData } from '@app/message/message';
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageMockMessageRepository extends MockRepository<MessageMessage> implements MessageIMessageRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'MessageMessage';
    public collectionSource: MessageMessage[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>messageMockMessageData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(MessageMessage.register(
                new MessageMessageId(itemCollection.id),
                new MessageMessageTenantIds(itemCollection.tenantIds),
                new MessageMessageStatus(itemCollection.status),
                new MessageMessageAccountRecipientIds(itemCollection.accountRecipientIds),
                new MessageMessageTenantRecipientIds(itemCollection.tenantRecipientIds),
                new MessageMessageScopeRecipients(itemCollection.scopeRecipients),
                new MessageMessageSendAt(itemCollection.sendAt),
                new MessageMessageIsImportant(itemCollection.isImportant),
                new MessageMessageSubject(itemCollection.subject),
                new MessageMessageBody(itemCollection.body),
                new MessageMessageAttachments(itemCollection.attachments),
                new MessageMessageTotalRecipients(itemCollection.totalRecipients),
                new MessageMessageReads(itemCollection.reads),
                new MessageMessageMeta(itemCollection.meta),
                new MessageMessageCreatedAt(itemCollection.createdAt),
                new MessageMessageUpdatedAt(itemCollection.updatedAt),
                new MessageMessageDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
