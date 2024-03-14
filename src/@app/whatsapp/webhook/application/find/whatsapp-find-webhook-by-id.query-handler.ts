import { WhatsappFindWebhookByIdQuery, WhatsappWebhookMapper, WhatsappWebhookResponse } from '@app/whatsapp/webhook';
import { WhatsappFindWebhookByIdService } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook-by-id.service';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappFindWebhookByIdQuery)
export class WhatsappFindWebhookByIdQueryHandler implements IQueryHandler<WhatsappFindWebhookByIdQuery>
{
    private readonly mapper: WhatsappWebhookMapper = new WhatsappWebhookMapper();

    constructor(
        private readonly findWebhookByIdService: WhatsappFindWebhookByIdService,
    ) {}

    async execute(query: WhatsappFindWebhookByIdQuery): Promise<WhatsappWebhookResponse>
    {
        const webhook = await this.findWebhookByIdService.main(
            new WhatsappWebhookId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(webhook);
    }
}
