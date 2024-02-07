import { NotificationDeletedNotificationEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedNotificationEvent)
export class NotificationDeletedNotificationEventHandler implements IEventHandler<NotificationDeletedNotificationEvent>
{
    handle(event: NotificationDeletedNotificationEvent): void
    {
        // console.log('NotificationDeletedNotificationEvent: ', event);
    }
}
