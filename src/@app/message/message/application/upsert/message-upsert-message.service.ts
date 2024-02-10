import { MessageIMessageRepository, MessageMessage } from '@app/message/message';
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
            sendAt: MessageMessageSendAt;
            isImportant: MessageMessageIsImportant;
            subject: MessageMessageSubject;
            body: MessageMessageBody;
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
            payload.sendAt,
            payload.isImportant,
            payload.subject,
            payload.body,
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
