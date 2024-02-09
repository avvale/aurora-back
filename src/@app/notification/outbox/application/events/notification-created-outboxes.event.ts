import { NotificationCreatedOutboxEvent } from './notification-created-outbox.event';

export class NotificationCreatedOutboxesEvent
{
    constructor(
        public readonly outboxes: NotificationCreatedOutboxEvent[],
    ) {}
}
