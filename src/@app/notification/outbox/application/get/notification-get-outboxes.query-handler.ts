import { NotificationGetOutboxesQuery, NotificationOutboxMapper, NotificationOutboxResponse } from '@app/notification/outbox';
import { NotificationGetOutboxesService } from '@app/notification/outbox/application/get/notification-get-outboxes.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationGetOutboxesQuery)
export class NotificationGetOutboxesQueryHandler implements IQueryHandler<NotificationGetOutboxesQuery>
{
    private readonly mapper: NotificationOutboxMapper = new NotificationOutboxMapper();

    constructor(
        private readonly getOutboxesService: NotificationGetOutboxesService,
    ) {}

    async execute(query: NotificationGetOutboxesQuery): Promise<NotificationOutboxResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getOutboxesService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
