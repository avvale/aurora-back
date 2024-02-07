import { NotificationUpdatedNotificationEvent } from './notification-updated-notification.event';

export class NotificationUpdatedNotificationsEvent
{
    constructor(
        public readonly notifications: NotificationUpdatedNotificationEvent[],
    ) {}
}
