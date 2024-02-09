import { NotificationInbox, NotificationInboxResponse } from '@app/notification/inbox';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxCreatedAt,
    NotificationInboxDeletedAt,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
    NotificationInboxUpdatedAt,
} from '@app/notification/inbox/domain/value-objects';
import { NotificationNotificationMapper } from '@app/notification/notification';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class NotificationInboxMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param inbox
     */
    mapModelToAggregate(inbox: LiteralObject, cQMetadata?: CQMetadata): NotificationInbox
    {
        if (!inbox) return;

        return this.makeAggregate(inbox, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param inboxes
     */
    mapModelsToAggregates(inboxes: LiteralObject[], cQMetadata?: CQMetadata): NotificationInbox[]
    {
        if (!Array.isArray(inboxes)) return;

        return inboxes.map(inbox => this.makeAggregate(inbox, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param inbox
     */
    mapAggregateToResponse(inbox: NotificationInbox): NotificationInboxResponse
    {
        return this.makeResponse(inbox);
    }

    /**
     * Map array of aggregates to array responses
     * @param inboxes
     */
    mapAggregatesToResponses(inboxes: NotificationInbox[]): NotificationInboxResponse[]
    {
        if (!Array.isArray(inboxes)) return;

        return inboxes.map(inbox => this.makeResponse(inbox));
    }

    private makeAggregate(inbox: LiteralObject, cQMetadata?: CQMetadata): NotificationInbox
    {
        return NotificationInbox.register(
            new NotificationInboxId(inbox.id, { undefinable: true }),
            new NotificationInboxTenantIds(inbox.tenantIds, { undefinable: true }),
            new NotificationInboxNotificationId(inbox.notificationId, { undefinable: true }),
            new NotificationInboxSort(inbox.sort, { undefinable: true }),
            new NotificationInboxAccountId(inbox.accountId, { undefinable: true }),
            new NotificationInboxAccountCode(inbox.accountCode, { undefinable: true }),
            new NotificationInboxIsImportant(inbox.isImportant, { undefinable: true }),
            new NotificationInboxSubject(inbox.subject, { undefinable: true }),
            new NotificationInboxBody(inbox.body, { undefinable: true }),
            new NotificationInboxAttachments(inbox.attachments, { undefinable: true }),
            new NotificationInboxIsRead(inbox.isRead, { undefinable: true }),
            new NotificationInboxIsReadAtLeastOnce(inbox.isReadAtLeastOnce, { undefinable: true }),
            new NotificationInboxMeta(inbox.meta, { undefinable: true }),
            new NotificationInboxCreatedAt(inbox.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationInboxUpdatedAt(inbox.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationInboxDeletedAt(inbox.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new NotificationNotificationMapper({ eagerLoading: true }).mapModelToAggregate(inbox.notification, cQMetadata) : undefined,
        );
    }

    private makeResponse(inbox: NotificationInbox): NotificationInboxResponse
    {
        if (!inbox) return;

        return new NotificationInboxResponse(
            inbox.id.value,
            inbox.tenantIds.value,
            inbox.notificationId.value,
            inbox.sort.value,
            inbox.accountId.value,
            inbox.accountCode.value,
            inbox.isImportant.value,
            inbox.subject.value,
            inbox.body.value,
            inbox.attachments.value,
            inbox.isRead.value,
            inbox.isReadAtLeastOnce.value,
            inbox.meta.value,
            inbox.createdAt.value,
            inbox.updatedAt.value,
            inbox.deletedAt.value,
            this.options.eagerLoading ? new NotificationNotificationMapper({ eagerLoading: true }).mapAggregateToResponse(inbox.notification) : undefined,
        );
    }
}
