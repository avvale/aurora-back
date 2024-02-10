/* eslint-disable key-spacing */
import { MessageUpdateInboxesCommand } from '@app/message/inbox';
import { MessageUpdateInboxesService } from '@app/message/inbox/application/update/message-update-inboxes.service';
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

@CommandHandler(MessageUpdateInboxesCommand)
export class MessageUpdateInboxesCommandHandler implements ICommandHandler<MessageUpdateInboxesCommand>
{
    constructor(
        private readonly updateInboxesService: MessageUpdateInboxesService,
    ) {}

    async execute(command: MessageUpdateInboxesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateInboxesService.main(
            {
                id: new MessageInboxId(command.payload.id, { undefinable: true }),
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
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
