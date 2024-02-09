import { NotificationMaxInboxQuery } from '@app/notification/inbox';
import { NotificationMaxInboxService } from '@app/notification/inbox/application/max/notification-max-inbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationMaxInboxQuery)
export class NotificationMaxInboxQueryHandler implements IQueryHandler<NotificationMaxInboxQuery>
{
    constructor(
        private readonly maxInboxService: NotificationMaxInboxService,
    ) {}

    async execute(query: NotificationMaxInboxQuery): Promise<number>
    {
        return await this.maxInboxService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
