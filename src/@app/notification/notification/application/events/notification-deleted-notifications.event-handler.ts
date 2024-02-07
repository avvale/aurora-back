import { NotificationDeletedNotificationsEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedNotificationsEvent)
export class NotificationDeletedNotificationsEventHandler implements IEventHandler<NotificationDeletedNotificationsEvent>
{
    handle(event: NotificationDeletedNotificationsEvent): void
    {
        // console.log('DeletedNotificationsEvent: ', event);
    }
}
