/* eslint-disable key-spacing */
import { MessageCreateOutboxCommand } from '@app/message/outbox';
import { MessageCreateOutboxService } from '@app/message/outbox/application/create/message-create-outbox.service';
import {
    MessageOutboxAccountRecipientIds,
    MessageOutboxId,
    MessageOutboxMessageId,
    MessageOutboxMeta,
    MessageOutboxScopeRecipients,
    MessageOutboxSort,
    MessageOutboxTenantRecipientIds,
} from '@app/message/outbox/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(MessageCreateOutboxCommand)
export class MessageCreateOutboxCommandHandler implements ICommandHandler<MessageCreateOutboxCommand>
{
    constructor(
        private readonly createOutboxService: MessageCreateOutboxService,
    ) {}

    async execute(command: MessageCreateOutboxCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createOutboxService.main(
            {
                id: new MessageOutboxId(command.payload.id),
                messageId: new MessageOutboxMessageId(command.payload.messageId),
                sort: new MessageOutboxSort(command.payload.sort),
                accountRecipientIds: new MessageOutboxAccountRecipientIds(command.payload.accountRecipientIds),
                tenantRecipientIds: new MessageOutboxTenantRecipientIds(command.payload.tenantRecipientIds),
                scopeRecipients: new MessageOutboxScopeRecipients(command.payload.scopeRecipients),
                meta: new MessageOutboxMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
