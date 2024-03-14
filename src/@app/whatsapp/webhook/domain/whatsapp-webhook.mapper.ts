import { WhatsappWebhook, WhatsappWebhookResponse } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class WhatsappWebhookMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param webhook
     */
    mapModelToAggregate(webhook: LiteralObject, cQMetadata?: CQMetadata): WhatsappWebhook
    {
        if (!webhook) return;

        return this.makeAggregate(webhook, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param webhooks
     */
    mapModelsToAggregates(webhooks: LiteralObject[], cQMetadata?: CQMetadata): WhatsappWebhook[]
    {
        if (!Array.isArray(webhooks)) return;

        return webhooks.map(webhook => this.makeAggregate(webhook, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param webhook
     */
    mapAggregateToResponse(webhook: WhatsappWebhook): WhatsappWebhookResponse
    {
        return this.makeResponse(webhook);
    }

    /**
     * Map array of aggregates to array responses
     * @param webhooks
     */
    mapAggregatesToResponses(webhooks: WhatsappWebhook[]): WhatsappWebhookResponse[]
    {
        if (!Array.isArray(webhooks)) return;

        return webhooks.map(webhook => this.makeResponse(webhook));
    }

    private makeAggregate(webhook: LiteralObject, cQMetadata?: CQMetadata): WhatsappWebhook
    {
        return WhatsappWebhook.register(
            new WhatsappWebhookId(webhook.id, { undefinable: true }),
            new WhatsappWebhookPayload(webhook.payload, { undefinable: true }),
            new WhatsappWebhookCreatedAt(webhook.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new WhatsappWebhookUpdatedAt(webhook.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new WhatsappWebhookDeletedAt(webhook.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(webhook: WhatsappWebhook): WhatsappWebhookResponse
    {
        if (!webhook) return;

        return new WhatsappWebhookResponse(
            webhook.id.value,
            webhook.payload.value,
            webhook.createdAt.value,
            webhook.updatedAt.value,
            webhook.deletedAt.value,
        );
    }
}
