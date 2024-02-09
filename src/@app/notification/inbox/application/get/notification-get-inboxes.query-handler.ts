import { NotificationGetInboxesQuery, NotificationInboxMapper, NotificationInboxResponse } from '@app/notification/inbox';
import { NotificationGetInboxesService } from '@app/notification/inbox/application/get/notification-get-inboxes.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationGetInboxesQuery)
export class NotificationGetInboxesQueryHandler implements IQueryHandler<NotificationGetInboxesQuery>
{
    private readonly mapper: NotificationInboxMapper = new NotificationInboxMapper();

    constructor(
        private readonly getInboxesService: NotificationGetInboxesService,
    ) {}

    async execute(query: NotificationGetInboxesQuery): Promise<NotificationInboxResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getInboxesService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
