import { MessageIInboxRepository, MessageInbox } from '@app/message/inbox';
import {
    MessageInboxAccountCode,
    MessageInboxAccountId,
    MessageInboxAttachments,
    MessageInboxBody,
    MessageInboxCreatedAt,
    MessageInboxDeletedAt,
    MessageInboxId,
    MessageInboxIsImportant,
    MessageInboxIsRead,
    MessageInboxIsReadAtLeastOnce,
    MessageInboxMessageId,
    MessageInboxMeta,
    MessageInboxSort,
    MessageInboxSubject,
    MessageInboxTenantIds,
    MessageInboxUpdatedAt,
} from '@app/message/inbox/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MessageCreateInboxService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: MessageIInboxRepository,
    ) {}

    async main(
        payload: {
            id: MessageInboxId;
            tenantIds: MessageInboxTenantIds;
            messageId: MessageInboxMessageId;
            sort: MessageInboxSort;
            accountId: MessageInboxAccountId;
            accountCode: MessageInboxAccountCode;
            isImportant: MessageInboxIsImportant;
            subject: MessageInboxSubject;
            body: MessageInboxBody;
            attachments: MessageInboxAttachments;
            isRead: MessageInboxIsRead;
            isReadAtLeastOnce: MessageInboxIsReadAtLeastOnce;
            meta: MessageInboxMeta;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const inbox = MessageInbox.register(
            payload.id,
            payload.tenantIds,
            payload.messageId,
            payload.sort,
            payload.accountId,
            payload.accountCode,
            payload.isImportant,
            payload.subject,
            payload.body,
            payload.attachments,
            payload.isRead,
            payload.isReadAtLeastOnce,
            payload.meta,
            new MessageInboxCreatedAt({ currentTimestamp: true }),
            new MessageInboxUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            inbox,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const inboxRegister = this.publisher.mergeObjectContext(
            inbox,
        );

        inboxRegister.created(inbox); // apply event to model events
        inboxRegister.commit(); // commit all events of model
    }
}
