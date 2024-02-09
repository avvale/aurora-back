import { NotificationOutboxMapper, NotificationOutboxResponse, NotificationRawSQLOutboxesQuery } from '@app/notification/outbox';
import { NotificationRawSQLOutboxesService } from '@app/notification/outbox/application/raw-sql/notification-raw-sql-outboxes.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationRawSQLOutboxesQuery)
export class NotificationRawSQLOutboxesQueryHandler implements IQueryHandler<NotificationRawSQLOutboxesQuery>
{
    private readonly mapper: NotificationOutboxMapper = new NotificationOutboxMapper();

    constructor(
        private readonly rawSQLOutboxesService: NotificationRawSQLOutboxesService,
    ) {}

    async execute(query: NotificationRawSQLOutboxesQuery): Promise<NotificationOutboxResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLOutboxesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
