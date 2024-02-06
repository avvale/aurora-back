import { NotificationGetOutBoxNotificationsQuery, NotificationOutBoxNotificationMapper, NotificationOutBoxNotificationResponse } from '@app/notification/out-box-notification';
import { NotificationGetOutBoxNotificationsService } from '@app/notification/out-box-notification/application/get/notification-get-out-box-notifications.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationGetOutBoxNotificationsQuery)
export class NotificationGetOutBoxNotificationsQueryHandler implements IQueryHandler<NotificationGetOutBoxNotificationsQuery>
{
    private readonly mapper: NotificationOutBoxNotificationMapper = new NotificationOutBoxNotificationMapper();

    constructor(
        private readonly getOutBoxNotificationsService: NotificationGetOutBoxNotificationsService,
    ) {}

    async execute(query: NotificationGetOutBoxNotificationsQuery): Promise<NotificationOutBoxNotificationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getOutBoxNotificationsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
