import { WhatsappFindWebhookQuery, WhatsappWebhookMapper, WhatsappWebhookResponse } from '@app/whatsapp/webhook';
import { WhatsappFindWebhookService } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappFindWebhookQuery)
export class WhatsappFindWebhookQueryHandler implements IQueryHandler<WhatsappFindWebhookQuery>
{
    private readonly mapper: WhatsappWebhookMapper = new WhatsappWebhookMapper();

    constructor(
        private readonly findWebhookService: WhatsappFindWebhookService,
    ) {}

    async execute(query: WhatsappFindWebhookQuery): Promise<WhatsappWebhookResponse>
    {
        const webhook = await this.findWebhookService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(webhook);
    }
}
