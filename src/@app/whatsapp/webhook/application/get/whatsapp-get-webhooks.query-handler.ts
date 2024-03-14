import { WhatsappGetWebhooksQuery, WhatsappWebhookMapper, WhatsappWebhookResponse } from '@app/whatsapp/webhook';
import { WhatsappGetWebhooksService } from '@app/whatsapp/webhook/application/get/whatsapp-get-webhooks.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappGetWebhooksQuery)
export class WhatsappGetWebhooksQueryHandler implements IQueryHandler<WhatsappGetWebhooksQuery>
{
    private readonly mapper: WhatsappWebhookMapper = new WhatsappWebhookMapper();

    constructor(
        private readonly getWebhooksService: WhatsappGetWebhooksService,
    ) {}

    async execute(query: WhatsappGetWebhooksQuery): Promise<WhatsappWebhookResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getWebhooksService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
