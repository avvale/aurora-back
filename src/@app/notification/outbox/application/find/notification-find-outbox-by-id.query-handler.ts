import { NotificationFindOutboxByIdQuery, NotificationOutboxMapper, NotificationOutboxResponse } from '@app/notification/outbox';
import { NotificationFindOutboxByIdService } from '@app/notification/outbox/application/find/notification-find-outbox-by-id.service';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindOutboxByIdQuery)
export class NotificationFindOutboxByIdQueryHandler implements IQueryHandler<NotificationFindOutboxByIdQuery>
{
    private readonly mapper: NotificationOutboxMapper = new NotificationOutboxMapper();

    constructor(
        private readonly findOutboxByIdService: NotificationFindOutboxByIdService,
    ) {}

    async execute(query: NotificationFindOutboxByIdQuery): Promise<NotificationOutboxResponse>
    {
        const outbox = await this.findOutboxByIdService.main(
            new NotificationOutboxId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(outbox);
    }
}
