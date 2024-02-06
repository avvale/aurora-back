import { NotificationFindOutBoxNotificationQuery, NotificationOutBoxNotificationMapper, NotificationOutBoxNotificationResponse } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindOutBoxNotificationQuery)
export class NotificationFindOutBoxNotificationQueryHandler implements IQueryHandler<NotificationFindOutBoxNotificationQuery>
{
    private readonly mapper: NotificationOutBoxNotificationMapper = new NotificationOutBoxNotificationMapper();

    constructor(
        private readonly findOutBoxNotificationService: NotificationFindOutBoxNotificationService,
    ) {}

    async execute(query: NotificationFindOutBoxNotificationQuery): Promise<NotificationOutBoxNotificationResponse>
    {
        const outBoxNotification = await this.findOutBoxNotificationService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(outBoxNotification);
    }
}
