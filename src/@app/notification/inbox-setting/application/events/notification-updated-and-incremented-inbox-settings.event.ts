import { NotificationUpdatedAndIncrementedInboxSettingEvent } from './notification-updated-and-incremented-inbox-setting.event';

export class NotificationUpdatedAndIncrementedInboxSettingsEvent
{
    constructor(
        public readonly inboxSettings: NotificationUpdatedAndIncrementedInboxSettingEvent[],
    ) {}
}
