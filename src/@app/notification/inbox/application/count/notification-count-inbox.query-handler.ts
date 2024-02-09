import { NotificationCountInboxQuery } from '@app/notification/inbox';
import { NotificationCountInboxService } from '@app/notification/inbox/application/count/notification-count-inbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationCountInboxQuery)
export class NotificationCountInboxQueryHandler implements IQueryHandler<NotificationCountInboxQuery>
{
    constructor(
        private readonly countInboxService: NotificationCountInboxService,
    ) {}

    async execute(query: NotificationCountInboxQuery): Promise<number>
    {
        return await this.countInboxService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
