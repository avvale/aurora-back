import { WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
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
export class WhatsappCreateWebhookService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        payload: {
            id: WhatsappWebhookId;
            payload: WhatsappWebhookPayload;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const webhook = WhatsappWebhook.register(
            payload.id,
            payload.payload,
            new WhatsappWebhookCreatedAt({ currentTimestamp: true }),
            new WhatsappWebhookUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            webhook,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const webhookRegister = this.publisher.mergeObjectContext(
            webhook,
        );

        webhookRegister.created(webhook); // apply event to model events
        webhookRegister.commit(); // commit all events of model
    }
}
