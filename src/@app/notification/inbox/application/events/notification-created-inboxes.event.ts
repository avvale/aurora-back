import { NotificationCreatedInboxEvent } from './notification-created-inbox.event';

export class NotificationCreatedInboxesEvent
{
    constructor(
        public readonly inboxes: NotificationCreatedInboxEvent[],
    ) {}
}
