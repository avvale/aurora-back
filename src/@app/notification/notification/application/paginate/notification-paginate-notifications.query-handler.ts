import { NotificationPaginateNotificationsQuery } from '@app/notification/notification';
import { NotificationPaginateNotificationsService } from '@app/notification/notification/application/paginate/notification-paginate-notifications.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationPaginateNotificationsQuery)
export class NotificationPaginateNotificationsQueryHandler implements IQueryHandler<NotificationPaginateNotificationsQuery>
{
    constructor(
        private readonly paginateNotificationsService: NotificationPaginateNotificationsService,
    ) {}

    async execute(query: NotificationPaginateNotificationsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateNotificationsService.main(
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
