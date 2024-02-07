import { NotificationFindNotificationByIdQuery, NotificationNotificationMapper, NotificationNotificationResponse } from '@app/notification/notification';
import { NotificationFindNotificationByIdService } from '@app/notification/notification/application/find/notification-find-notification-by-id.service';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindNotificationByIdQuery)
export class NotificationFindNotificationByIdQueryHandler implements IQueryHandler<NotificationFindNotificationByIdQuery>
{
    private readonly mapper: NotificationNotificationMapper = new NotificationNotificationMapper();

    constructor(
        private readonly findNotificationByIdService: NotificationFindNotificationByIdService,
    ) {}

    async execute(query: NotificationFindNotificationByIdQuery): Promise<NotificationNotificationResponse>
    {
        const notification = await this.findNotificationByIdService.main(
            new NotificationNotificationId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(notification);
    }
}
