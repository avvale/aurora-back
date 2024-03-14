import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappWebhook } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappMockWebhookRepository extends MockRepository<WhatsappWebhook> implements WhatsappIWebhookRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'WhatsappWebhook';
    public collectionSource: WhatsappWebhook[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>whatsappMockWebhookData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(WhatsappWebhook.register(
                new WhatsappWebhookId(itemCollection.id),
                new WhatsappWebhookPayload(itemCollection.payload),
                new WhatsappWebhookCreatedAt(itemCollection.createdAt),
                new WhatsappWebhookUpdatedAt(itemCollection.updatedAt),
                new WhatsappWebhookDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
