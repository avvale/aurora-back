import { NotificationPaginateOutBoxNotificationsQuery } from '@app/notification/out-box-notification';
import { NotificationPaginateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/paginate/notification-paginate-out-box-notifications.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationPaginateOutBoxNotificationsQuery)
export class NotificationPaginateOutBoxNotificationsQueryHandler implements IQueryHandler<NotificationPaginateOutBoxNotificationsQuery>
{
    constructor(
        private readonly paginateOutBoxNotificationsService: NotificationPaginateOutBoxNotificationsService,
    ) {}

    async execute(query: NotificationPaginateOutBoxNotificationsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateOutBoxNotificationsService.main(
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
