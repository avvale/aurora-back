/* eslint-disable key-spacing */
import { WhatsappUpdateWebhookByIdCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhookByIdService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhook-by-id.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappUpdateWebhookByIdCommand)
export class WhatsappUpdateWebhookByIdCommandHandler implements ICommandHandler<WhatsappUpdateWebhookByIdCommand>
{
    constructor(
        private readonly updateWebhookByIdService: WhatsappUpdateWebhookByIdService,
    ) {}

    async execute(command: WhatsappUpdateWebhookByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateWebhookByIdService.main(
            {
                id: new WhatsappWebhookId(command.payload.id),
                payload: new WhatsappWebhookPayload(command.payload.payload, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
