import { NotificationFindInboxByIdQuery, NotificationInboxMapper, NotificationInboxResponse } from '@app/notification/inbox';
import { NotificationFindInboxByIdService } from '@app/notification/inbox/application/find/notification-find-inbox-by-id.service';
import { NotificationInboxId } from '@app/notification/inbox/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindInboxByIdQuery)
export class NotificationFindInboxByIdQueryHandler implements IQueryHandler<NotificationFindInboxByIdQuery>
{
    private readonly mapper: NotificationInboxMapper = new NotificationInboxMapper();

    constructor(
        private readonly findInboxByIdService: NotificationFindInboxByIdService,
    ) {}

    async execute(query: NotificationFindInboxByIdQuery): Promise<NotificationInboxResponse>
    {
        const inbox = await this.findInboxByIdService.main(
            new NotificationInboxId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(inbox);
    }
}
