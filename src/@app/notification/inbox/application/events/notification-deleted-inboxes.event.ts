import { NotificationDeletedInboxEvent } from './notification-deleted-inbox.event';

export class NotificationDeletedInboxesEvent
{
    constructor(
        public readonly inboxes: NotificationDeletedInboxEvent[],
    ) {}
}
