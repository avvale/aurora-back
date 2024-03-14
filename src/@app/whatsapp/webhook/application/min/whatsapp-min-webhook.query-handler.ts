import { WhatsappMinWebhookQuery } from '@app/whatsapp/webhook';
import { WhatsappMinWebhookService } from '@app/whatsapp/webhook/application/min/whatsapp-min-webhook.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappMinWebhookQuery)
export class WhatsappMinWebhookQueryHandler implements IQueryHandler<WhatsappMinWebhookQuery>
{
    constructor(
        private readonly minWebhookService: WhatsappMinWebhookService,
    ) {}

    async execute(query: WhatsappMinWebhookQuery): Promise<number>
    {
        return await this.minWebhookService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
