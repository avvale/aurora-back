import { NotificationInboxSetting, NotificationInboxSettingResponse } from '@app/notification/inbox-setting';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingCreatedAt,
    NotificationInboxSettingDeletedAt,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
    NotificationInboxSettingUpdatedAt,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class NotificationInboxSettingMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param inboxSetting
     */
    mapModelToAggregate(inboxSetting: LiteralObject, cQMetadata?: CQMetadata): NotificationInboxSetting
    {
        if (!inboxSetting) return;

        return this.makeAggregate(inboxSetting, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param inboxSettings
     */
    mapModelsToAggregates(inboxSettings: LiteralObject[], cQMetadata?: CQMetadata): NotificationInboxSetting[]
    {
        if (!Array.isArray(inboxSettings)) return;

        return inboxSettings.map(inboxSetting => this.makeAggregate(inboxSetting, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param inboxSetting
     */
    mapAggregateToResponse(inboxSetting: NotificationInboxSetting): NotificationInboxSettingResponse
    {
        return this.makeResponse(inboxSetting);
    }

    /**
     * Map array of aggregates to array responses
     * @param inboxSettings
     */
    mapAggregatesToResponses(inboxSettings: NotificationInboxSetting[]): NotificationInboxSettingResponse[]
    {
        if (!Array.isArray(inboxSettings)) return;

        return inboxSettings.map(inboxSetting => this.makeResponse(inboxSetting));
    }

    private makeAggregate(inboxSetting: LiteralObject, cQMetadata?: CQMetadata): NotificationInboxSetting
    {
        return NotificationInboxSetting.register(
            new NotificationInboxSettingId(inboxSetting.id, { undefinable: true }),
            new NotificationInboxSettingAccountId(inboxSetting.accountId, { undefinable: true }),
            new NotificationInboxSettingSort(inboxSetting.sort, { undefinable: true }),
            new NotificationInboxSettingCreatedAt(inboxSetting.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationInboxSettingUpdatedAt(inboxSetting.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationInboxSettingDeletedAt(inboxSetting.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(inboxSetting: NotificationInboxSetting): NotificationInboxSettingResponse
    {
        if (!inboxSetting) return;

        return new NotificationInboxSettingResponse(
            inboxSetting.id.value,
            inboxSetting.accountId.value,
            inboxSetting.sort.value,
            inboxSetting.createdAt.value,
            inboxSetting.updatedAt.value,
            inboxSetting.deletedAt.value,
        );
    }
}
