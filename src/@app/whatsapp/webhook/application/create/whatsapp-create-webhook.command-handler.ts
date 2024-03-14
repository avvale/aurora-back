/* eslint-disable key-spacing */
import { WhatsappCreateWebhookCommand } from '@app/whatsapp/webhook';
import { WhatsappCreateWebhookService } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhook.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappCreateWebhookCommand)
export class WhatsappCreateWebhookCommandHandler implements ICommandHandler<WhatsappCreateWebhookCommand>
{
    constructor(
        private readonly createWebhookService: WhatsappCreateWebhookService,
    ) {}

    async execute(command: WhatsappCreateWebhookCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createWebhookService.main(
            {
                id: new WhatsappWebhookId(command.payload.id),
                payload: new WhatsappWebhookPayload(command.payload.payload),
            },
            command.cQMetadata,
        );
    }
}
