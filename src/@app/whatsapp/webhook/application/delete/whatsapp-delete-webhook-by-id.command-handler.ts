import { WhatsappDeleteWebhookByIdCommand } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhookByIdService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhook-by-id.service';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappDeleteWebhookByIdCommand)
export class WhatsappDeleteWebhookByIdCommandHandler implements ICommandHandler<WhatsappDeleteWebhookByIdCommand>
{
    constructor(
        private readonly deleteWebhookByIdService: WhatsappDeleteWebhookByIdService,
    ) {}

    async execute(command: WhatsappDeleteWebhookByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteWebhookByIdService.main(
            new WhatsappWebhookId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
