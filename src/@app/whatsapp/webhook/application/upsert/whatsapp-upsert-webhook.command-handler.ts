/* eslint-disable key-spacing */
import { WhatsappUpsertWebhookCommand } from '@app/whatsapp/webhook';
import { WhatsappUpsertWebhookService } from '@app/whatsapp/webhook/application/upsert/whatsapp-upsert-webhook.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappUpsertWebhookCommand)
export class WhatsappUpsertWebhookCommandHandler implements ICommandHandler<WhatsappUpsertWebhookCommand>
{
    constructor(
        private readonly upsertWebhookService: WhatsappUpsertWebhookService,
    ) {}

    async execute(command: WhatsappUpsertWebhookCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertWebhookService.main(
            {
                id: new WhatsappWebhookId(command.payload.id),
                payload: new WhatsappWebhookPayload(command.payload.payload),
            },
            command.cQMetadata,
        );
    }
}
