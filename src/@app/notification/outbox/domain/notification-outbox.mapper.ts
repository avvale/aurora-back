import { NotificationNotificationMapper } from '@app/notification/notification';
import { NotificationOutbox, NotificationOutboxResponse } from '@app/notification/outbox';
import {
    NotificationOutboxAccountRecipientIds,
    NotificationOutboxCreatedAt,
    NotificationOutboxDeletedAt,
    NotificationOutboxId,
    NotificationOutboxMeta,
    NotificationOutboxNotificationId,
    NotificationOutboxScopeRecipients,
    NotificationOutboxSort,
    NotificationOutboxTenantRecipientIds,
    NotificationOutboxUpdatedAt,
} from '@app/notification/outbox/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class NotificationOutboxMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param outbox
     */
    mapModelToAggregate(outbox: LiteralObject, cQMetadata?: CQMetadata): NotificationOutbox
    {
        if (!outbox) return;

        return this.makeAggregate(outbox, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param outboxes
     */
    mapModelsToAggregates(outboxes: LiteralObject[], cQMetadata?: CQMetadata): NotificationOutbox[]
    {
        if (!Array.isArray(outboxes)) return;

        return outboxes.map(outbox => this.makeAggregate(outbox, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param outbox
     */
    mapAggregateToResponse(outbox: NotificationOutbox): NotificationOutboxResponse
    {
        return this.makeResponse(outbox);
    }

    /**
     * Map array of aggregates to array responses
     * @param outboxes
     */
    mapAggregatesToResponses(outboxes: NotificationOutbox[]): NotificationOutboxResponse[]
    {
        if (!Array.isArray(outboxes)) return;

        return outboxes.map(outbox => this.makeResponse(outbox));
    }

    private makeAggregate(outbox: LiteralObject, cQMetadata?: CQMetadata): NotificationOutbox
    {
        return NotificationOutbox.register(
            new NotificationOutboxId(outbox.id, { undefinable: true }),
            new NotificationOutboxNotificationId(outbox.notificationId, { undefinable: true }),
            new NotificationOutboxSort(outbox.sort, { undefinable: true }),
            new NotificationOutboxAccountRecipientIds(outbox.accountRecipientIds, { undefinable: true }),
            new NotificationOutboxTenantRecipientIds(outbox.tenantRecipientIds, { undefinable: true }),
            new NotificationOutboxScopeRecipients(outbox.scopeRecipients, { undefinable: true }),
            new NotificationOutboxMeta(outbox.meta, { undefinable: true }),
            new NotificationOutboxCreatedAt(outbox.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationOutboxUpdatedAt(outbox.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new NotificationOutboxDeletedAt(outbox.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new NotificationNotificationMapper({ eagerLoading: true }).mapModelToAggregate(outbox.notification, cQMetadata) : undefined,
        );
    }

    private makeResponse(outbox: NotificationOutbox): NotificationOutboxResponse
    {
        if (!outbox) return;

        return new NotificationOutboxResponse(
            outbox.id.value,
            outbox.notificationId.value,
            outbox.sort.value,
            outbox.accountRecipientIds.value,
            outbox.tenantRecipientIds.value,
            outbox.scopeRecipients.value,
            outbox.meta.value,
            outbox.createdAt.value,
            outbox.updatedAt.value,
            outbox.deletedAt.value,
            this.options.eagerLoading ? new NotificationNotificationMapper({ eagerLoading: true }).mapAggregateToResponse(outbox.notification) : undefined,
        );
    }
}
