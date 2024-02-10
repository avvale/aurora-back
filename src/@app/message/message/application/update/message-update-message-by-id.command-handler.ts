/* eslint-disable key-spacing */
import { MessageUpdateMessageByIdCommand } from '@app/message/message';
import { MessageUpdateMessageByIdService } from '@app/message/message/application/update/message-update-message-by-id.service';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
    MessageMessageBody,
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
} from '@app/message/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MessageUpdateMessageByIdCommand)
export class MessageUpdateMessageByIdCommandHandler implements ICommandHandler<MessageUpdateMessageByIdCommand>
{
    constructor(
        private readonly updateMessageByIdService: MessageUpdateMessageByIdService,
    ) {}

    async execute(command: MessageUpdateMessageByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateMessageByIdService.main(
            {
                id: new MessageMessageId(command.payload.id),
                tenantIds: new MessageMessageTenantIds(command.payload.tenantIds),
                status: new MessageMessageStatus(command.payload.status, { undefinable: true }),
                accountRecipientIds: new MessageMessageAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new MessageMessageTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new MessageMessageScopeRecipients(command.payload.scopeRecipients),
                sendAt: new MessageMessageSendAt(command.payload.sendAt, {}, { removeTimezone: command.cQMetadata.timezone }),
                isImportant: new MessageMessageIsImportant(command.payload.isImportant, { undefinable: true }),
                subject: new MessageMessageSubject(command.payload.subject, { undefinable: true }),
                body: new MessageMessageBody(command.payload.body, { undefinable: true }),
                attachments: new MessageMessageAttachments(command.payload.attachments),
                totalRecipients: new MessageMessageTotalRecipients(command.payload.totalRecipients, { undefinable: true }),
                reads: new MessageMessageReads(command.payload.reads, { undefinable: true }),
                meta: new MessageMessageMeta(command.payload.meta),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
