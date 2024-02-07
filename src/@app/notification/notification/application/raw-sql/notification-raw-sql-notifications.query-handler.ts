import { NotificationNotificationMapper, NotificationNotificationResponse, NotificationRawSQLNotificationsQuery } from '@app/notification/notification';
import { NotificationRawSQLNotificationsService } from '@app/notification/notification/application/raw-sql/notification-raw-sql-notifications.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationRawSQLNotificationsQuery)
export class NotificationRawSQLNotificationsQueryHandler implements IQueryHandler<NotificationRawSQLNotificationsQuery>
{
    private readonly mapper: NotificationNotificationMapper = new NotificationNotificationMapper();

    constructor(
        private readonly rawSQLNotificationsService: NotificationRawSQLNotificationsService,
    ) {}

    async execute(query: NotificationRawSQLNotificationsQuery): Promise<NotificationNotificationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLNotificationsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
