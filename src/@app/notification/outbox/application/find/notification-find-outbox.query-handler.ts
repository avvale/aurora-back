import { NotificationFindOutboxQuery, NotificationOutboxMapper, NotificationOutboxResponse } from '@app/notification/outbox';
import { NotificationFindOutboxService } from '@app/notification/outbox/application/find/notification-find-outbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindOutboxQuery)
export class NotificationFindOutboxQueryHandler implements IQueryHandler<NotificationFindOutboxQuery>
{
    private readonly mapper: NotificationOutboxMapper = new NotificationOutboxMapper();

    constructor(
        private readonly findOutboxService: NotificationFindOutboxService,
    ) {}

    async execute(query: NotificationFindOutboxQuery): Promise<NotificationOutboxResponse>
    {
        const outbox = await this.findOutboxService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(outbox);
    }
}
