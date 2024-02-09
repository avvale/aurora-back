import { NotificationUpdatedInboxSettingEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedInboxSettingEvent)
export class NotificationUpdatedInboxSettingEventHandler implements IEventHandler<NotificationUpdatedInboxSettingEvent>
{
    handle(event: NotificationUpdatedInboxSettingEvent): void
    {
        // console.log('UpdatedInboxSettingEvent: ', event);
    }
}
