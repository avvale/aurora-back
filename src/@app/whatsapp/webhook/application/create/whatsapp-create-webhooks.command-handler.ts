/* eslint-disable key-spacing */
import { WhatsappCreateWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappCreateWebhooksService } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhooks.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappCreateWebhooksCommand)
export class WhatsappCreateWebhooksCommandHandler implements ICommandHandler<WhatsappCreateWebhooksCommand>
{
    constructor(
        private readonly createWebhooksService: WhatsappCreateWebhooksService,
    ) {}

    async execute(command: WhatsappCreateWebhooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createWebhooksService.main(
            command.payload
                .map(webhook =>
                {
                    return {
                        id: new WhatsappWebhookId(webhook.id),
                        payload: new WhatsappWebhookPayload(webhook.payload),
                    };
                }),
            command.cQMetadata,
        );
    }
}
