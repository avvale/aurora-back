import { WhatsappCreatedWebhookEvent, WhatsappCreatedWebhooksEvent, WhatsappDeletedWebhookEvent, WhatsappDeletedWebhooksEvent, WhatsappUpdatedAndIncrementedWebhookEvent, WhatsappUpdatedAndIncrementedWebhooksEvent, WhatsappUpdatedWebhookEvent, WhatsappUpdatedWebhooksEvent, WhatsappWebhook } from '@app/whatsapp/webhook';
import { AggregateRoot } from '@nestjs/cqrs';

export class WhatsappAddWebhooksContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: WhatsappWebhook[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new WhatsappCreatedWebhooksEvent(
                this.aggregateRoots.map(webhook =>
                    new WhatsappCreatedWebhookEvent(
                        webhook.id.value,
                        webhook.payload.value,
                        webhook.createdAt?.value,
                        webhook.updatedAt?.value,
                        webhook.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new WhatsappUpdatedWebhooksEvent(
                this.aggregateRoots.map(webhook =>
                    new WhatsappUpdatedWebhookEvent(
                        webhook.id.value,
                        webhook.payload.value,
                        webhook.createdAt?.value,
                        webhook.updatedAt?.value,
                        webhook.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updatedAndIncremented(): void
    {
        this.apply(
            new WhatsappUpdatedAndIncrementedWebhooksEvent(
                this.aggregateRoots.map(webhook =>
                    new WhatsappUpdatedAndIncrementedWebhookEvent(
                        webhook.id.value,
                        webhook.payload.value,
                        webhook.createdAt?.value,
                        webhook.updatedAt?.value,
                        webhook.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new WhatsappDeletedWebhooksEvent(
                this.aggregateRoots.map(webhook =>
                    new WhatsappDeletedWebhookEvent(
                        webhook.id.value,
                        webhook.payload.value,
                        webhook.createdAt?.value,
                        webhook.updatedAt?.value,
                        webhook.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
