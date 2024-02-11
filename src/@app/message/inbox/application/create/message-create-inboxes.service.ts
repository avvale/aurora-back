import { MessageAddInboxesContextEvent, MessageIInboxRepository, MessageInbox } from '@app/message/inbox';
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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class MessageCreateInboxesService
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
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateInboxes = payload.map(inbox => MessageInbox.register(
            inbox.id,
            inbox.tenantIds,
            inbox.messageId,
            inbox.sort,
            inbox.accountId,
            inbox.accountCode,
            inbox.isImportant,
            inbox.sentAt,
            inbox.title,
            inbox.description,
            inbox.link,
            inbox.isInternalLink,
            inbox.image,
            inbox.icon,
            inbox.attachments,
            inbox.isRead,
            inbox.isReadAtLeastOnce,
            inbox.meta,
            new MessageInboxCreatedAt({ currentTimestamp: true }),
            new MessageInboxUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateInboxes,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddInboxesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const inboxesRegistered = this.publisher.mergeObjectContext(new MessageAddInboxesContextEvent(aggregateInboxes));

        inboxesRegistered.created(); // apply event to model events
        inboxesRegistered.commit(); // commit all events of model
    }
}
