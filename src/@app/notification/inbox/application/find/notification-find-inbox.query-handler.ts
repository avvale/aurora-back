import { NotificationFindInboxQuery, NotificationInboxMapper, NotificationInboxResponse } from '@app/notification/inbox';
import { NotificationFindInboxService } from '@app/notification/inbox/application/find/notification-find-inbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindInboxQuery)
export class NotificationFindInboxQueryHandler implements IQueryHandler<NotificationFindInboxQuery>
{
    private readonly mapper: NotificationInboxMapper = new NotificationInboxMapper();

    constructor(
        private readonly findInboxService: NotificationFindInboxService,
    ) {}

    async execute(query: NotificationFindInboxQuery): Promise<NotificationInboxResponse>
    {
        const inbox = await this.findInboxService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(inbox);
    }
}
