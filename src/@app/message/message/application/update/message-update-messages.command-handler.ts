/* eslint-disable key-spacing */
import { MessageUpdateMessagesCommand } from '@app/message/message';
import { MessageUpdateMessagesService } from '@app/message/message/application/update/message-update-messages.service';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
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
    MessageMessageTenantIds,
    MessageMessageTenantRecipientIds,
    MessageMessageTitle,
    MessageMessageTotalRecipients,
} from '@app/message/message/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MessageUpdateMessagesCommand)
export class MessageUpdateMessagesCommandHandler implements ICommandHandler<MessageUpdateMessagesCommand>
{
    constructor(
        private readonly updateMessagesService: MessageUpdateMessagesService,
    ) {}

    async execute(command: MessageUpdateMessagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateMessagesService.main(
            {
                id: new MessageMessageId(command.payload.id, { undefinable: true }),
                tenantIds: new MessageMessageTenantIds(command.payload.tenantIds),
                status: new MessageMessageStatus(command.payload.status, { undefinable: true }),
                accountRecipientIds: new MessageMessageAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new MessageMessageTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new MessageMessageScopeRecipients(command.payload.scopeRecipients),
                sendAt: new MessageMessageSendAt(command.payload.sendAt, {}, { removeTimezone: command.cQMetadata?.timezone }),
                isImportant: new MessageMessageIsImportant(command.payload.isImportant, { undefinable: true }),
                title: new MessageMessageTitle(command.payload.title, { undefinable: true }),
                description: new MessageMessageDescription(command.payload.description, { undefinable: true }),
                link: new MessageMessageLink(command.payload.link),
                isInternalLink: new MessageMessageIsInternalLink(command.payload.isInternalLink),
                image: new MessageMessageImage(command.payload.image),
                icon: new MessageMessageIcon(command.payload.icon),
                attachments: new MessageMessageAttachments(command.payload.attachments),
                totalRecipients: new MessageMessageTotalRecipients(command.payload.totalRecipients, { undefinable: true }),
                reads: new MessageMessageReads(command.payload.reads, { undefinable: true }),
                meta: new MessageMessageMeta(command.payload.meta),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
