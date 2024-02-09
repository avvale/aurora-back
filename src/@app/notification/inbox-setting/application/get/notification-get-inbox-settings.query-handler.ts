import { NotificationGetInboxSettingsQuery, NotificationInboxSettingMapper, NotificationInboxSettingResponse } from '@app/notification/inbox-setting';
import { NotificationGetInboxSettingsService } from '@app/notification/inbox-setting/application/get/notification-get-inbox-settings.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationGetInboxSettingsQuery)
export class NotificationGetInboxSettingsQueryHandler implements IQueryHandler<NotificationGetInboxSettingsQuery>
{
    private readonly mapper: NotificationInboxSettingMapper = new NotificationInboxSettingMapper();

    constructor(
        private readonly getInboxSettingsService: NotificationGetInboxSettingsService,
    ) {}

    async execute(query: NotificationGetInboxSettingsQuery): Promise<NotificationInboxSettingResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getInboxSettingsService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
