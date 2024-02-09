import { NotificationUpdatedInboxEvent } from './notification-updated-inbox.event';

export class NotificationUpdatedInboxesEvent
{
    constructor(
        public readonly inboxes: NotificationUpdatedInboxEvent[],
    ) {}
}
