import { whatsappMockWebhookData, WhatsappWebhook } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class WhatsappMockWebhookSeeder extends MockSeeder<WhatsappWebhook>
{
    public collectionSource: WhatsappWebhook[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const webhook of _.orderBy(whatsappMockWebhookData, ['id']))
        {
            this.collectionSource.push(
                WhatsappWebhook.register(
                    new WhatsappWebhookId(webhook.id),
                    new WhatsappWebhookPayload(webhook.payload),
                    new WhatsappWebhookCreatedAt({ currentTimestamp: true }),
                    new WhatsappWebhookUpdatedAt({ currentTimestamp: true }),
                    new WhatsappWebhookDeletedAt(null),
                ),
            );
        }
    }
}
