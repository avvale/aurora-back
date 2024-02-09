import { NotificationDeletedOutboxEvent } from './notification-deleted-outbox.event';

export class NotificationDeletedOutboxesEvent
{
    constructor(
        public readonly outboxes: NotificationDeletedOutboxEvent[],
    ) {}
}
