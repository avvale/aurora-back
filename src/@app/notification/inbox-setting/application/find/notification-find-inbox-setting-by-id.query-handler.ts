import { NotificationFindInboxSettingByIdQuery, NotificationInboxSettingMapper, NotificationInboxSettingResponse } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingByIdService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting-by-id.service';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(NotificationFindInboxSettingByIdQuery)
export class NotificationFindInboxSettingByIdQueryHandler implements IQueryHandler<NotificationFindInboxSettingByIdQuery>
{
    private readonly mapper: NotificationInboxSettingMapper = new NotificationInboxSettingMapper();

    constructor(
        private readonly findInboxSettingByIdService: NotificationFindInboxSettingByIdService,
    ) {}

    async execute(query: NotificationFindInboxSettingByIdQuery): Promise<NotificationInboxSettingResponse>
    {
        const inboxSetting = await this.findInboxSettingByIdService.main(
            new NotificationInboxSettingId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(inboxSetting);
    }
}
