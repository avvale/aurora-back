import { NotificationInboxSettingMapper, NotificationInboxSettingResponse, NotificationRawSQLInboxSettingsQuery } from '@app/notification/inbox-setting';
import { NotificationRawSQLInboxSettingsService } from '@app/notification/inbox-setting/application/raw-sql/notification-raw-sql-inbox-settings.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationRawSQLInboxSettingsQuery)
export class NotificationRawSQLInboxSettingsQueryHandler implements IQueryHandler<NotificationRawSQLInboxSettingsQuery>
{
    private readonly mapper: NotificationInboxSettingMapper = new NotificationInboxSettingMapper();

    constructor(
        private readonly rawSQLInboxSettingsService: NotificationRawSQLInboxSettingsService,
    ) {}

    async execute(query: NotificationRawSQLInboxSettingsQuery): Promise<NotificationInboxSettingResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLInboxSettingsService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
