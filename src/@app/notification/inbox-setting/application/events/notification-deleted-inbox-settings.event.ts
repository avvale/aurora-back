import { NotificationDeletedInboxSettingEvent } from './notification-deleted-inbox-setting.event';

export class NotificationDeletedInboxSettingsEvent
{
    constructor(
        public readonly inboxSettings: NotificationDeletedInboxSettingEvent[],
    ) {}
}
