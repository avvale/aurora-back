/* eslint-disable key-spacing */
import { MessageUpdateInboxByIdCommand } from '@app/message/inbox';
import { MessageUpdateInboxByIdService } from '@app/message/inbox/application/update/message-update-inbox-by-id.service';
import {
    MessageInboxAccountCode,
    MessageInboxAccountId,
    MessageInboxAttachments,
    MessageInboxBody,
    MessageInboxId,
    MessageInboxIsImportant,
    MessageInboxIsRead,
    MessageInboxIsReadAtLeastOnce,
    MessageInboxMessageId,
    MessageInboxMeta,
    MessageInboxSort,
    MessageInboxSubject,
    MessageInboxTenantIds,
} from '@app/message/inbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MessageUpdateInboxByIdCommand)
export class MessageUpdateInboxByIdCommandHandler implements ICommandHandler<MessageUpdateInboxByIdCommand>
{
    constructor(
        private readonly updateInboxByIdService: MessageUpdateInboxByIdService,
    ) {}

    async execute(command: MessageUpdateInboxByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInboxByIdService.main(
            {
                id: new MessageInboxId(command.payload.id),
                tenantIds: new MessageInboxTenantIds(command.payload.tenantIds),
                messageId: new MessageInboxMessageId(command.payload.messageId, { undefinable: true }),
                sort: new MessageInboxSort(command.payload.sort, { undefinable: true }),
                accountId: new MessageInboxAccountId(command.payload.accountId, { undefinable: true }),
                accountCode: new MessageInboxAccountCode(command.payload.accountCode),
                isImportant: new MessageInboxIsImportant(command.payload.isImportant, { undefinable: true }),
                subject: new MessageInboxSubject(command.payload.subject, { undefinable: true }),
                body: new MessageInboxBody(command.payload.body, { undefinable: true }),
                attachments: new MessageInboxAttachments(command.payload.attachments),
                isRead: new MessageInboxIsRead(command.payload.isRead, { undefinable: true }),
                isReadAtLeastOnce: new MessageInboxIsReadAtLeastOnce(command.payload.isReadAtLeastOnce, { undefinable: true }),
                meta: new MessageInboxMeta(command.payload.meta),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
