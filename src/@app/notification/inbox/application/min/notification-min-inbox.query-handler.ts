import { NotificationMinInboxQuery } from '@app/notification/inbox';
import { NotificationMinInboxService } from '@app/notification/inbox/application/min/notification-min-inbox.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationMinInboxQuery)
export class NotificationMinInboxQueryHandler implements IQueryHandler<NotificationMinInboxQuery>
{
    constructor(
        private readonly minInboxService: NotificationMinInboxService,
    ) {}

    async execute(query: NotificationMinInboxQuery): Promise<number>
    {
        return await this.minInboxService.main(
            query.column,
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );
    }
}
