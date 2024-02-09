import { NotificationDeletedInboxSettingEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedInboxSettingEvent)
export class NotificationDeletedInboxSettingEventHandler implements IEventHandler<NotificationDeletedInboxSettingEvent>
{
    handle(event: NotificationDeletedInboxSettingEvent): void
    {
        // console.log('NotificationDeletedInboxSettingEvent: ', event);
    }
}
