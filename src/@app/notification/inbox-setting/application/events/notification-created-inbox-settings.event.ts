import { NotificationCreatedInboxSettingEvent } from './notification-created-inbox-setting.event';

export class NotificationCreatedInboxSettingsEvent
{
    constructor(
        public readonly inboxSettings: NotificationCreatedInboxSettingEvent[],
    ) {}
}
