import { NotificationOutBoxNotification, NotificationOutBoxNotificationResponse } from '@app/notification/out-box-notification';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationCreatedAt,
    NotificationOutBoxNotificationDeletedAt,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
    NotificationOutBoxNotificationUpdatedAt,
} from '@app/notification/out-box-notification/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param outBoxNotification
     */
    mapModelToAggregate(outBoxNotification: LiteralObject, cQMetadata?: CQMetadata): NotificationOutBoxNotification
    {
        if (!outBoxNotification) return;

        return this.makeAggregate(outBoxNotification, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param outBoxNotifications
     */
    mapModelsToAggregates(outBoxNotifications: LiteralObject[], cQMetadata?: CQMetadata): NotificationOutBoxNotification[]
    {
        if (!Array.isArray(outBoxNotifications)) return;

        return outBoxNotifications.map(outBoxNotification => this.makeAggregate(outBoxNotification, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param outBoxNotification
     */
    mapAggregateToResponse(outBoxNotification: NotificationOutBoxNotification): NotificationOutBoxNotificationResponse
    {
        return this.makeResponse(outBoxNotification);
    }

    /**
     * Map array of aggregates to array responses
     * @param outBoxNotifications
     */
    mapAggregatesToResponses(outBoxNotifications: NotificationOutBoxNotification[]): NotificationOutBoxNotificationResponse[]
    {
        if (!Array.isArray(outBoxNotifications)) return;

        return outBoxNotifications.map(outBoxNotification => this.makeResponse(outBoxNotification));
    }

    private makeAggregate(outBoxNotification: LiteralObject, cQMetadata?: CQMetadata): NotificationOutBoxNotification
    {
        return NotificationOutBoxNotification.register(
            new NotificationOutBoxNotificationId(outBoxNotification.id, { undefinable: true }),
            new NotificationOutBoxNotificationSort(outBoxNotification.sort, { undefinable: true }),
            new NotificationOutBoxNotificationTenantId(outBoxNotification.tenantId, { undefinable: true }),
            new NotificationOutBoxNotificationAccountIds(outBoxNotification.accountIds, { undefinable: true }),
            new NotificationOutBoxNotificationAccountTenantOperator(outBoxNotification.accountTenantOperator, { undefinable: true }),
            new NotificationOutBoxNotificationTenantIds(outBoxNotification.tenantIds, { undefinable: true }),
            new NotificationOutBoxNotificationScopes(outBoxNotification.scopes, { undefinable: true }),
            new NotificationOutBoxNotificationIsImportant(outBoxNotification.isImportant, { undefinable: true }),
            new NotificationOutBoxNotificationSubject(outBoxNotification.subject, { undefinable: true }),
            new NotificationOutBoxNotificationBody(outBoxNotification.body, { undefinable: true }),
            new NotificationOutBoxNotificationAttachments(outBoxNotification.attachments, { undefinable: true }),
            new NotificationOutBoxNotificationMeta(outBoxNotification.meta, { undefinable: true }),
            new NotificationOutBoxNotificationCreatedAt(outBoxNotification.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationOutBoxNotificationUpdatedAt(outBoxNotification.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationOutBoxNotificationDeletedAt(outBoxNotification.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(outBoxNotification: NotificationOutBoxNotification): NotificationOutBoxNotificationResponse
    {
        if (!outBoxNotification) return;

        return new NotificationOutBoxNotificationResponse(
            outBoxNotification.id.value,
            outBoxNotification.sort.value,
            outBoxNotification.tenantId.value,
            outBoxNotification.accountIds.value,
            outBoxNotification.accountTenantOperator.value,
            outBoxNotification.tenantIds.value,
            outBoxNotification.scopes.value,
            outBoxNotification.isImportant.value,
            outBoxNotification.subject.value,
            outBoxNotification.body.value,
            outBoxNotification.attachments.value,
            outBoxNotification.meta.value,
            outBoxNotification.createdAt.value,
            outBoxNotification.updatedAt.value,
            outBoxNotification.deletedAt.value,
        );
    }
}
