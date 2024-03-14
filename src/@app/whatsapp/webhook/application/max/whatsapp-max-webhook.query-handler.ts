import { WhatsappMaxWebhookQuery } from '@app/whatsapp/webhook';
import { WhatsappMaxWebhookService } from '@app/whatsapp/webhook/application/max/whatsapp-max-webhook.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappMaxWebhookQuery)
export class WhatsappMaxWebhookQueryHandler implements IQueryHandler<WhatsappMaxWebhookQuery>
{
    constructor(
        private readonly maxWebhookService: WhatsappMaxWebhookService,
    ) {}

    async execute(query: WhatsappMaxWebhookQuery): Promise<number>
    {
        return await this.maxWebhookService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
