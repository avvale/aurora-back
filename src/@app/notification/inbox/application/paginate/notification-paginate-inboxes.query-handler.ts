import { NotificationPaginateInboxesQuery } from '@app/notification/inbox';
import { NotificationPaginateInboxesService } from '@app/notification/inbox/application/paginate/notification-paginate-inboxes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationPaginateInboxesQuery)
export class NotificationPaginateInboxesQueryHandler implements IQueryHandler<NotificationPaginateInboxesQuery>
{
    constructor(
        private readonly paginateInboxesService: NotificationPaginateInboxesService,
    ) {}

    async execute(query: NotificationPaginateInboxesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateInboxesService.main(
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
