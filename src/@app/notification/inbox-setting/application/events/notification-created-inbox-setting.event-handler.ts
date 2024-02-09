import { NotificationCreatedInboxSettingEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedInboxSettingEvent)
export class NotificationCreatedInboxSettingEventHandler implements IEventHandler<NotificationCreatedInboxSettingEvent>
{
    handle(event: NotificationCreatedInboxSettingEvent): void
    {
        // console.log('NotificationCreatedInboxSettingEvent: ', event);
    }
}
