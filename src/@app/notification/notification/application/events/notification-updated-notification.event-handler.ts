import { NotificationUpdatedNotificationEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedNotificationEvent)
export class NotificationUpdatedNotificationEventHandler implements IEventHandler<NotificationUpdatedNotificationEvent>
{
    handle(event: NotificationUpdatedNotificationEvent): void
    {
        // console.log('UpdatedNotificationEvent: ', event);
    }
}
