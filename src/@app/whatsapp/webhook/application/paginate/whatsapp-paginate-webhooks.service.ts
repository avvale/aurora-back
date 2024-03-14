import { WhatsappIWebhookRepository, WhatsappWebhook } from '@app/whatsapp/webhook';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappPaginateWebhooksService
{
    constructor(
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<WhatsappWebhook>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
