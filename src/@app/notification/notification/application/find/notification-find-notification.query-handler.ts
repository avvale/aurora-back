import { NotificationFindNotificationQuery, NotificationNotificationMapper, NotificationNotificationResponse } from '@app/notification/notification';
import { NotificationFindNotificationService } from '@app/notification/notification/application/find/notification-find-notification.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindNotificationQuery)
export class NotificationFindNotificationQueryHandler implements IQueryHandler<NotificationFindNotificationQuery>
{
    private readonly mapper: NotificationNotificationMapper = new NotificationNotificationMapper();

    constructor(
        private readonly findNotificationService: NotificationFindNotificationService,
    ) {}

    async execute(query: NotificationFindNotificationQuery): Promise<NotificationNotificationResponse>
    {
        const notification = await this.findNotificationService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(notification);
    }
}
