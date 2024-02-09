import { NotificationFindInboxSettingQuery, NotificationInboxSettingMapper, NotificationInboxSettingResponse } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindInboxSettingQuery)
export class NotificationFindInboxSettingQueryHandler implements IQueryHandler<NotificationFindInboxSettingQuery>
{
    private readonly mapper: NotificationInboxSettingMapper = new NotificationInboxSettingMapper();

    constructor(
        private readonly findInboxSettingService: NotificationFindInboxSettingService,
    ) {}

    async execute(query: NotificationFindInboxSettingQuery): Promise<NotificationInboxSettingResponse>
    {
        const inboxSetting = await this.findInboxSettingService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(inboxSetting);
    }
}
