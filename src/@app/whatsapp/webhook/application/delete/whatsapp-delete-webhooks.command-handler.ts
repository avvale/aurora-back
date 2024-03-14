import { WhatsappDeleteWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhooksService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhooks.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(WhatsappDeleteWebhooksCommand)
export class WhatsappDeleteWebhooksCommandHandler implements ICommandHandler<WhatsappDeleteWebhooksCommand>
{
    constructor(
        private readonly deleteWebhooksService: WhatsappDeleteWebhooksService,
    ) {}

    async execute(command: WhatsappDeleteWebhooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteWebhooksService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
