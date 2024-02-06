import { NotificationUpdatedOutBoxNotificationEvent } from './notification-updated-out-box-notification.event';

export class NotificationUpdatedOutBoxNotificationsEvent
{
    constructor(
        public readonly outBoxNotifications: NotificationUpdatedOutBoxNotificationEvent[],
    ) {}
}
