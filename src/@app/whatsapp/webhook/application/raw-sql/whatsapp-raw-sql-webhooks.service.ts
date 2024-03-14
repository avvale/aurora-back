import { WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappRawSQLWebhooksService
{
    constructor(
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<WhatsappWebhook[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
