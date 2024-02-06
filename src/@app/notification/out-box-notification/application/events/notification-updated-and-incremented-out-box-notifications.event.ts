import { NotificationUpdatedAndIncrementedOutBoxNotificationEvent } from './notification-updated-and-incremented-out-box-notification.event';

export class NotificationUpdatedAndIncrementedOutBoxNotificationsEvent
{
    constructor(
        public readonly outBoxNotifications: NotificationUpdatedAndIncrementedOutBoxNotificationEvent[],
    ) {}
}
