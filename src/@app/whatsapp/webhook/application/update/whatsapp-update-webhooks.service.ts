import { WhatsappAddWebhooksContextEvent, WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class WhatsappUpdateWebhooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        payload: {
            id?: WhatsappWebhookId;
            payload?: WhatsappWebhookPayload;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const webhook = WhatsappWebhook.register(
            payload.id,
            payload.payload,
            null, // createdAt
            new WhatsappWebhookUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update
        await this.repository.update(
            webhook,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const webhooks = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const webhooksRegister = this.publisher.mergeObjectContext(
            new WhatsappAddWebhooksContextEvent(webhooks),
        );

        webhooksRegister.updated(); // apply event to model events
        webhooksRegister.commit(); // commit all events of model
    }
}
