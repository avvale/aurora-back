import { MessageIMessageRepository, MessageMessage, messageMockMessageData } from '@app/message/message';
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
    MessageMessageTagRecipients,
    MessageMessageTenantIds,
    MessageMessageTenantRecipientIds,
    MessageMessageTitle,
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
                new MessageMessageTagRecipients(itemCollection.tagRecipients),
                new MessageMessageSendAt(itemCollection.sendAt),
                new MessageMessageIsImportant(itemCollection.isImportant),
                new MessageMessageTitle(itemCollection.title),
                new MessageMessageDescription(itemCollection.description),
                new MessageMessageLink(itemCollection.link),
                new MessageMessageIsInternalLink(itemCollection.isInternalLink),
                new MessageMessageImage(itemCollection.image),
                new MessageMessageIcon(itemCollection.icon),
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
