import { NotificationFindOutBoxNotificationByIdQuery, NotificationOutBoxNotificationMapper, NotificationOutBoxNotificationResponse } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification-by-id.service';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindOutBoxNotificationByIdQuery)
export class NotificationFindOutBoxNotificationByIdQueryHandler implements IQueryHandler<NotificationFindOutBoxNotificationByIdQuery>
{
    private readonly mapper: NotificationOutBoxNotificationMapper = new NotificationOutBoxNotificationMapper();

    constructor(
        private readonly findOutBoxNotificationByIdService: NotificationFindOutBoxNotificationByIdService,
    ) {}

    async execute(query: NotificationFindOutBoxNotificationByIdQuery): Promise<NotificationOutBoxNotificationResponse>
    {
        const outBoxNotification = await this.findOutBoxNotificationByIdService.main(
            new NotificationOutBoxNotificationId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(outBoxNotification);
    }
}
