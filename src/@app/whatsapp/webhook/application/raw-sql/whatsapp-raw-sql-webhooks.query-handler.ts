import { WhatsappRawSQLWebhooksQuery, WhatsappWebhookMapper, WhatsappWebhookResponse } from '@app/whatsapp/webhook';
import { WhatsappRawSQLWebhooksService } from '@app/whatsapp/webhook/application/raw-sql/whatsapp-raw-sql-webhooks.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappRawSQLWebhooksQuery)
export class WhatsappRawSQLWebhooksQueryHandler implements IQueryHandler<WhatsappRawSQLWebhooksQuery>
{
    private readonly mapper: WhatsappWebhookMapper = new WhatsappWebhookMapper();

    constructor(
        private readonly rawSQLWebhooksService: WhatsappRawSQLWebhooksService,
    ) {}

    async execute(query: WhatsappRawSQLWebhooksQuery): Promise<WhatsappWebhookResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLWebhooksService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
