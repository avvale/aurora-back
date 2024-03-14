/* eslint-disable key-spacing */
import { WhatsappUpdateAndIncrementWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateAndIncrementWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-and-increment-webhooks.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappUpdateAndIncrementWebhooksCommand)
export class WhatsappUpdateAndIncrementWebhooksCommandHandler implements ICommandHandler<WhatsappUpdateAndIncrementWebhooksCommand>
{
    constructor(
        private readonly updateWebhooksService: WhatsappUpdateAndIncrementWebhooksService,
    ) {}

    async execute(command: WhatsappUpdateAndIncrementWebhooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateWebhooksService.main(
            {
                id: new WhatsappWebhookId(command.payload.id, { undefinable: true }),
                payload: new WhatsappWebhookPayload(command.payload.payload, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
