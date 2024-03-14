import { WhatsappSumWebhookQuery } from '@app/whatsapp/webhook';
import { WhatsappSumWebhookService } from '@app/whatsapp/webhook/application/sum/whatsapp-sum-webhook.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappSumWebhookQuery)
export class WhatsappSumWebhookQueryHandler implements IQueryHandler<WhatsappSumWebhookQuery>
{
    constructor(
        private readonly sumWebhookService: WhatsappSumWebhookService,
    ) {}

    async execute(query: WhatsappSumWebhookQuery): Promise<number>
    {
        return await this.sumWebhookService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
