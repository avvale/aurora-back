/* eslint-disable key-spacing */
import { MessageUpsertInboxCommand } from '@app/message/inbox';
import { MessageUpsertInboxService } from '@app/message/inbox/application/upsert/message-upsert-inbox.service';
import {
    MessageInboxAccountCode,
    MessageInboxAccountId,
    MessageInboxAttachments,
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
} from '@app/message/inbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MessageUpsertInboxCommand)
export class MessageUpsertInboxCommandHandler implements ICommandHandler<MessageUpsertInboxCommand>
{
    constructor(
        private readonly upsertInboxService: MessageUpsertInboxService,
    ) {}

    async execute(command: MessageUpsertInboxCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertInboxService.main(
            {
                id: new MessageInboxId(command.payload.id),
                tenantIds: new MessageInboxTenantIds(command.payload.tenantIds),
                messageId: new MessageInboxMessageId(command.payload.messageId),
                sort: new MessageInboxSort(command.payload.sort),
                accountId: new MessageInboxAccountId(command.payload.accountId),
                accountCode: new MessageInboxAccountCode(command.payload.accountCode),
                isImportant: new MessageInboxIsImportant(command.payload.isImportant),
                sentAt: new MessageInboxSentAt(command.payload.sentAt, {}, { removeTimezone: command.cQMetadata?.timezone }),
                title: new MessageInboxTitle(command.payload.title),
                description: new MessageInboxDescription(command.payload.description),
                link: new MessageInboxLink(command.payload.link),
                isInternalLink: new MessageInboxIsInternalLink(command.payload.isInternalLink),
                image: new MessageInboxImage(command.payload.image),
                icon: new MessageInboxIcon(command.payload.icon),
                attachments: new MessageInboxAttachments(command.payload.attachments),
                isRead: new MessageInboxIsRead(command.payload.isRead),
                isReadAtLeastOnce: new MessageInboxIsReadAtLeastOnce(command.payload.isReadAtLeastOnce),
                meta: new MessageInboxMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
