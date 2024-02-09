import { NotificationSumInboxQuery } from '@app/notification/inbox';
import { NotificationSumInboxService } from '@app/notification/inbox/application/sum/notification-sum-inbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationSumInboxQuery)
export class NotificationSumInboxQueryHandler implements IQueryHandler<NotificationSumInboxQuery>
{
    constructor(
        private readonly sumInboxService: NotificationSumInboxService,
    ) {}

    async execute(query: NotificationSumInboxQuery): Promise<number>
    {
        return await this.sumInboxService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
