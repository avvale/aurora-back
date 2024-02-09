import { NotificationUpdatedAndIncrementedInboxEvent } from './notification-updated-and-incremented-inbox.event';

export class NotificationUpdatedAndIncrementedInboxesEvent
{
    constructor(
        public readonly inboxes: NotificationUpdatedAndIncrementedInboxEvent[],
    ) {}
}
