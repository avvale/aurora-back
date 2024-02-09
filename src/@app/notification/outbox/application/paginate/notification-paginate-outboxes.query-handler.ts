import { NotificationPaginateOutboxesQuery } from '@app/notification/outbox';
import { NotificationPaginateOutboxesService } from '@app/notification/outbox/application/paginate/notification-paginate-outboxes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationPaginateOutboxesQuery)
export class NotificationPaginateOutboxesQueryHandler implements IQueryHandler<NotificationPaginateOutboxesQuery>
{
    constructor(
        private readonly paginateOutboxesService: NotificationPaginateOutboxesService,
    ) {}

    async execute(query: NotificationPaginateOutboxesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateOutboxesService.main(
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
