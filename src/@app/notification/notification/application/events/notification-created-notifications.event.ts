import { NotificationCreatedNotificationEvent } from './notification-created-notification.event';

export class NotificationCreatedNotificationsEvent
{
    constructor(
        public readonly notifications: NotificationCreatedNotificationEvent[],
    ) {}
}
