import { NotificationPaginateInboxSettingsQuery } from '@app/notification/inbox-setting';
import { NotificationPaginateInboxSettingsService } from '@app/notification/inbox-setting/application/paginate/notification-paginate-inbox-settings.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationPaginateInboxSettingsQuery)
export class NotificationPaginateInboxSettingsQueryHandler implements IQueryHandler<NotificationPaginateInboxSettingsQuery>
{
    constructor(
        private readonly paginateInboxSettingsService: NotificationPaginateInboxSettingsService,
    ) {}

    async execute(query: NotificationPaginateInboxSettingsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateInboxSettingsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
