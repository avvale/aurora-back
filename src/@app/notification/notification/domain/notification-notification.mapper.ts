import { NotificationNotification, NotificationNotificationResponse } from '@app/notification/notification';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopeRecipients,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantIds,
    NotificationNotificationTenantRecipientIds,
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
            new NotificationNotificationTenantIds(notification.tenantIds, { undefinable: true }),
            new NotificationNotificationStatus(notification.status, { undefinable: true }),
            new NotificationNotificationAccountRecipientIds(notification.accountRecipientIds, { undefinable: true }),
            new NotificationNotificationTenantRecipientIds(notification.tenantRecipientIds, { undefinable: true }),
            new NotificationNotificationScopeRecipients(notification.scopeRecipients, { undefinable: true }),
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
            notification.tenantIds.value,
            notification.status.value,
            notification.accountRecipientIds.value,
            notification.tenantRecipientIds.value,
            notification.scopeRecipients.value,
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
