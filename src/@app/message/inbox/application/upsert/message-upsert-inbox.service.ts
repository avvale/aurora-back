import { MessageIInboxRepository, MessageInbox } from '@app/message/inbox';
import {
    MessageInboxAccountCode,
    MessageInboxAccountId,
    MessageInboxAttachments,
    MessageInboxCreatedAt,
    MessageInboxDeletedAt,
    MessageInboxDescription,
    MessageInboxIcon,
    MessageInboxId,
    MessageInboxImage,
    MessageInboxIsImportant,
    MessageInboxIsInternalLink,
    MessageInboxIsRead,
    MessageInboxIsReadAtLeastOnce,
    MessageInboxLink,
    MessageInboxMessageId,
    MessageInboxMeta,
    MessageInboxSentAt,
    MessageInboxSort,
    MessageInboxTenantIds,
    MessageInboxTitle,
    MessageInboxUpdatedAt,
} from '@app/message/inbox/domain/value-objects';
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MessageUpsertInboxService
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
            sentAt: MessageInboxSentAt;
            title: MessageInboxTitle;
            description: MessageInboxDescription;
            link: MessageInboxLink;
            isInternalLink: MessageInboxIsInternalLink;
            image: MessageInboxImage;
            icon: MessageInboxIcon;
            attachments: MessageInboxAttachments;
            isRead: MessageInboxIsRead;
            isReadAtLeastOnce: MessageInboxIsReadAtLeastOnce;
            meta: MessageInboxMeta;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const inbox = MessageInbox.register(
            payload.id,
            payload.tenantIds,
            payload.messageId,
            payload.sort,
            payload.accountId,
            payload.accountCode,
            payload.isImportant,
            payload.sentAt,
            payload.title,
            payload.description,
            payload.link,
            payload.isInternalLink,
            payload.image,
            payload.icon,
            payload.attachments,
            payload.isRead,
            payload.isReadAtLeastOnce,
            payload.meta,
            new MessageInboxCreatedAt({ currentTimestamp: true }),
            new MessageInboxUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                inbox,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
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
