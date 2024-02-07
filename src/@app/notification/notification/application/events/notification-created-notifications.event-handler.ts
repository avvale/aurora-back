import { NotificationCreatedNotificationsEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedNotificationsEvent)
export class NotificationCreatedNotificationsEventHandler implements IEventHandler<NotificationCreatedNotificationsEvent>
{
    handle(event: NotificationCreatedNotificationsEvent): void
    {
        // console.log('CreatedNotificationsEvent: ', event);
    }
}
