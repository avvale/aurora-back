/* eslint-disable key-spacing */
import { WhatsappUpdateWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhooks.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappUpdateWebhooksCommand)
export class WhatsappUpdateWebhooksCommandHandler implements ICommandHandler<WhatsappUpdateWebhooksCommand>
{
    constructor(
        private readonly updateWebhooksService: WhatsappUpdateWebhooksService,
    ) {}

    async execute(command: WhatsappUpdateWebhooksCommand): Promise<void>
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
