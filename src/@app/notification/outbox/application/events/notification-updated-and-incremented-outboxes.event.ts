import { NotificationUpdatedAndIncrementedOutboxEvent } from './notification-updated-and-incremented-outbox.event';

export class NotificationUpdatedAndIncrementedOutboxesEvent
{
    constructor(
        public readonly outboxes: NotificationUpdatedAndIncrementedOutboxEvent[],
    ) {}
}
