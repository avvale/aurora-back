import { NotificationDeletedNotificationEvent } from './notification-deleted-notification.event';

export class NotificationDeletedNotificationsEvent
{
    constructor(
        public readonly notifications: NotificationDeletedNotificationEvent[],
    ) {}
}
