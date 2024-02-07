import { NotificationNotification, NotificationNotificationResponse } from '@app/notification/notification';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopes,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantId,
    NotificationNotificationTenantIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class NotificationNotificationMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param notification
     */
    mapModelToAggregate(notification: LiteralObject, cQMetadata?: CQMetadata): NotificationNotification
    {
        if (!notification) return;

        return this.makeAggregate(notification, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param notifications
     */
    mapModelsToAggregates(notifications: LiteralObject[], cQMetadata?: CQMetadata): NotificationNotification[]
    {
        if (!Array.isArray(notifications)) return;

        return notifications.map(notification => this.makeAggregate(notification, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param notification
     */
    mapAggregateToResponse(notification: NotificationNotification): NotificationNotificationResponse
    {
        return this.makeResponse(notification);
    }

    /**
     * Map array of aggregates to array responses
     * @param notifications
     */
    mapAggregatesToResponses(notifications: NotificationNotification[]): NotificationNotificationResponse[]
    {
        if (!Array.isArray(notifications)) return;

        return notifications.map(notification => this.makeResponse(notification));
    }

    private makeAggregate(notification: LiteralObject, cQMetadata?: CQMetadata): NotificationNotification
    {
        return NotificationNotification.register(
            new NotificationNotificationId(notification.id, { undefinable: true }),
            new NotificationNotificationTenantId(notification.tenantId, { undefinable: true }),
            new NotificationNotificationStatus(notification.status, { undefinable: true }),
            new NotificationNotificationAccountIds(notification.accountIds, { undefinable: true }),
            new NotificationNotificationTenantIds(notification.tenantIds, { undefinable: true }),
            new NotificationNotificationScopes(notification.scopes, { undefinable: true }),
            new NotificationNotificationSendAt(notification.sendAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationNotificationIsImportant(notification.isImportant, { undefinable: true }),
            new NotificationNotificationSubject(notification.subject, { undefinable: true }),
            new NotificationNotificationBody(notification.body, { undefinable: true }),
            new NotificationNotificationAttachments(notification.attachments, { undefinable: true }),
            new NotificationNotificationTotalRecipients(notification.totalRecipients, { undefinable: true }),
            new NotificationNotificationReads(notification.reads, { undefinable: true }),
            new NotificationNotificationMeta(notification.meta, { undefinable: true }),
            new NotificationNotificationCreatedAt(notification.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationNotificationUpdatedAt(notification.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationNotificationDeletedAt(notification.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(notification: NotificationNotification): NotificationNotificationResponse
    {
        if (!notification) return;

        return new NotificationNotificationResponse(
            notification.id.value,
            notification.tenantId.value,
            notification.status.value,
            notification.accountIds.value,
            notification.tenantIds.value,
            notification.scopes.value,
            notification.sendAt.value,
            notification.isImportant.value,
            notification.subject.value,
            notification.body.value,
            notification.attachments.value,
            notification.totalRecipients.value,
            notification.reads.value,
            notification.meta.value,
            notification.createdAt.value,
            notification.updatedAt.value,
            notification.deletedAt.value,
        );
    }
}
