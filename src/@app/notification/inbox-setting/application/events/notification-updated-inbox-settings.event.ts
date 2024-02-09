import { NotificationUpdatedInboxSettingEvent } from './notification-updated-inbox-setting.event';

export class NotificationUpdatedInboxSettingsEvent
{
    constructor(
        public readonly inboxSettings: NotificationUpdatedInboxSettingEvent[],
    ) {}
}
