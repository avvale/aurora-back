import { NotificationDeletedOutBoxNotificationEvent } from './notification-deleted-out-box-notification.event';

export class NotificationDeletedOutBoxNotificationsEvent
{
    constructor(
        public readonly outBoxNotifications: NotificationDeletedOutBoxNotificationEvent[],
    ) {}
}
