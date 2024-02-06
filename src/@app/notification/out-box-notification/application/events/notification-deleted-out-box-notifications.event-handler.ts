import { NotificationDeletedOutBoxNotificationsEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedOutBoxNotificationsEvent)
export class NotificationDeletedOutBoxNotificationsEventHandler implements IEventHandler<NotificationDeletedOutBoxNotificationsEvent>
{
    handle(event: NotificationDeletedOutBoxNotificationsEvent): void
    {
        // console.log('DeletedOutBoxNotificationsEvent: ', event);
    }
}
