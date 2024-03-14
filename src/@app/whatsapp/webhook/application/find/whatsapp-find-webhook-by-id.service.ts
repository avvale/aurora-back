import { WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappFindWebhookByIdService
{
    constructor(
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        id: WhatsappWebhookId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<WhatsappWebhook>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
