import { NotificationOutBoxNotificationMapper, NotificationOutBoxNotificationResponse, NotificationRawSQLOutBoxNotificationsQuery } from '@app/notification/out-box-notification';
import { NotificationRawSQLOutBoxNotificationsService } from '@app/notification/out-box-notification/application/raw-sql/notification-raw-sql-out-box-notifications.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationRawSQLOutBoxNotificationsQuery)
export class NotificationRawSQLOutBoxNotificationsQueryHandler implements IQueryHandler<NotificationRawSQLOutBoxNotificationsQuery>
{
    private readonly mapper: NotificationOutBoxNotificationMapper = new NotificationOutBoxNotificationMapper();

    constructor(
        private readonly rawSQLOutBoxNotificationsService: NotificationRawSQLOutBoxNotificationsService,
    ) {}

    async execute(query: NotificationRawSQLOutBoxNotificationsQuery): Promise<NotificationOutBoxNotificationResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLOutBoxNotificationsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
