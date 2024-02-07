import { NotificationUpdatedNotificationsEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedNotificationsEvent)
export class NotificationUpdatedNotificationsEventHandler implements IEventHandler<NotificationUpdatedNotificationsEvent>
{
    handle(event: NotificationUpdatedNotificationsEvent): void
    {
        // console.log('NotificationUpdatedNotificationsEvent: ', event);
    }
}
