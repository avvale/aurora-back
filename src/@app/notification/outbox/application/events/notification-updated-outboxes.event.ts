import { NotificationUpdatedOutboxEvent } from './notification-updated-outbox.event';

export class NotificationUpdatedOutboxesEvent
{
    constructor(
        public readonly outboxes: NotificationUpdatedOutboxEvent[],
    ) {}
}
