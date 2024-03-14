import { WhatsappAddWebhooksContextEvent, WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class WhatsappCreateWebhooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        payload: {
            id: WhatsappWebhookId;
            payload: WhatsappWebhookPayload;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateWebhooks = payload.map(webhook => WhatsappWebhook.register(
            webhook.id,
            webhook.payload,
            new WhatsappWebhookCreatedAt({ currentTimestamp: true }),
            new WhatsappWebhookUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateWebhooks,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddWebhooksContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const webhooksRegistered = this.publisher.mergeObjectContext(new WhatsappAddWebhooksContextEvent(aggregateWebhooks));

        webhooksRegistered.created(); // apply event to model events
        webhooksRegistered.commit(); // commit all events of model
    }
}
