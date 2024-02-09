import { NotificationInboxMapper, NotificationInboxResponse, NotificationRawSQLInboxesQuery } from '@app/notification/inbox';
import { NotificationRawSQLInboxesService } from '@app/notification/inbox/application/raw-sql/notification-raw-sql-inboxes.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationRawSQLInboxesQuery)
export class NotificationRawSQLInboxesQueryHandler implements IQueryHandler<NotificationRawSQLInboxesQuery>
{
    private readonly mapper: NotificationInboxMapper = new NotificationInboxMapper();

    constructor(
        private readonly rawSQLInboxesService: NotificationRawSQLInboxesService,
    ) {}

    async execute(query: NotificationRawSQLInboxesQuery): Promise<NotificationInboxResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLInboxesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
