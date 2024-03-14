import { WhatsappCountWebhookQuery } from '@app/whatsapp/webhook';
import { WhatsappCountWebhookService } from '@app/whatsapp/webhook/application/count/whatsapp-count-webhook.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappCountWebhookQuery)
export class WhatsappCountWebhookQueryHandler implements IQueryHandler<WhatsappCountWebhookQuery>
{
    constructor(
        private readonly countWebhookService: WhatsappCountWebhookService,
    ) {}

    async execute(query: WhatsappCountWebhookQuery): Promise<number>
    {
        return await this.countWebhookService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
