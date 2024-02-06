import { NotificationCreatedOutBoxNotificationEvent } from './notification-created-out-box-notification.event';

export class NotificationCreatedOutBoxNotificationsEvent
{
    constructor(
        public readonly outBoxNotifications: NotificationCreatedOutBoxNotificationEvent[],
    ) {}
}
