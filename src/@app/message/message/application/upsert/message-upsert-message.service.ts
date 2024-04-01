import { MessageIMessageRepository, MessageMessage } from '@app/message/message';
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
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MessageUpsertMessageService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MessageIMessageRepository,
    ) {}

    async main(
        payload: {
            id: MessageMessageId;
            tenantIds: MessageMessageTenantIds;
            status: MessageMessageStatus;
            accountRecipientIds: MessageMessageAccountRecipientIds;
            tenantRecipientIds: MessageMessageTenantRecipientIds;
            scopeRecipients: MessageMessageScopeRecipients;
            tagRecipients: MessageMessageTagRecipients;
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
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const message = MessageMessage.register(
            payload.id,
            payload.tenantIds,
            payload.status,
            payload.accountRecipientIds,
            payload.tenantRecipientIds,
            payload.scopeRecipients,
            payload.tagRecipients,
            payload.sendAt,
            payload.isImportant,
            payload.title,
            payload.description,
            payload.link,
            payload.isInternalLink,
            payload.image,
            payload.icon,
            payload.attachments,
            payload.totalRecipients,
            payload.reads,
            payload.meta,
            new MessageMessageCreatedAt({ currentTimestamp: true }),
            new MessageMessageUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                message,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const messageRegister = this.publisher.mergeObjectContext(
            message,
        );

        messageRegister.created(message); // apply event to model events
        messageRegister.commit(); // commit all events of model
    }
}
