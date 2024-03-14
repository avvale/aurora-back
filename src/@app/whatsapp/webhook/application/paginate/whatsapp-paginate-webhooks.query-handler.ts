import { WhatsappPaginateWebhooksQuery } from '@app/whatsapp/webhook';
import { WhatsappPaginateWebhooksService } from '@app/whatsapp/webhook/application/paginate/whatsapp-paginate-webhooks.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(WhatsappPaginateWebhooksQuery)
export class WhatsappPaginateWebhooksQueryHandler implements IQueryHandler<WhatsappPaginateWebhooksQuery>
{
    constructor(
        private readonly paginateWebhooksService: WhatsappPaginateWebhooksService,
    ) {}

    async execute(query: WhatsappPaginateWebhooksQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateWebhooksService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
