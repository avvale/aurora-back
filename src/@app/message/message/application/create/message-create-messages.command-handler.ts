/* eslint-disable key-spacing */
import { MessageCreateMessagesCommand } from '@app/message/message';
import { MessageCreateMessagesService } from '@app/message/message/application/create/message-create-messages.service';
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

@CommandHandler(MessageCreateMessagesCommand)
export class MessageCreateMessagesCommandHandler implements ICommandHandler<MessageCreateMessagesCommand>
{
    constructor(
        private readonly createMessagesService: MessageCreateMessagesService,
    ) {}

    async execute(command: MessageCreateMessagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createMessagesService.main(
            command.payload
                .map(message =>
                {
                    return {
                        id: new MessageMessageId(message.id),
                        tenantIds: new MessageMessageTenantIds(message.tenantIds),
                        status: new MessageMessageStatus(message.status),
                        accountRecipientIds: new MessageMessageAccountRecipientIds(message.accountRecipientIds),
                        tenantRecipientIds: new MessageMessageTenantRecipientIds(message.tenantRecipientIds),
                        scopeRecipients: new MessageMessageScopeRecipients(message.scopeRecipients),
                        sendAt: new MessageMessageSendAt(message.sendAt, {}, { removeTimezone: command.cQMetadata?.timezone }),
                        isImportant: new MessageMessageIsImportant(message.isImportant),
                        title: new MessageMessageTitle(message.title),
                        description: new MessageMessageDescription(message.description),
                        link: new MessageMessageLink(message.link),
                        isInternalLink: new MessageMessageIsInternalLink(message.isInternalLink),
                        image: new MessageMessageImage(message.image),
                        icon: new MessageMessageIcon(message.icon),
                        attachments: new MessageMessageAttachments(message.attachments),
                        totalRecipients: new MessageMessageTotalRecipients(message.totalRecipients),
                        reads: new MessageMessageReads(message.reads),
                        meta: new MessageMessageMeta(message.meta),
                    };
                }),
            command.cQMetadata,
        );
    }
}
