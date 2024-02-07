import { NotificationGetNotificationsQuery, NotificationNotificationMapper, NotificationNotificationResponse } from '@app/notification/notification';
import { NotificationGetNotificationsService } from '@app/notification/notification/application/get/notification-get-notifications.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationGetNotificationsQuery)
export class NotificationGetNotificationsQueryHandler implements IQueryHandler<NotificationGetNotificationsQuery>
{
    private readonly mapper: NotificationNotificationMapper = new NotificationNotificationMapper();

    constructor(
        private readonly getNotificationsService: NotificationGetNotificationsService,
    ) {}

    async execute(query: NotificationGetNotificationsQuery): Promise<NotificationNotificationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getNotificationsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
