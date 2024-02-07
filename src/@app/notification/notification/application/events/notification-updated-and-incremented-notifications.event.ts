import { NotificationUpdatedAndIncrementedNotificationEvent } from './notification-updated-and-incremented-notification.event';

export class NotificationUpdatedAndIncrementedNotificationsEvent
{
    constructor(
        public readonly notifications: NotificationUpdatedAndIncrementedNotificationEvent[],
    ) {}
}
