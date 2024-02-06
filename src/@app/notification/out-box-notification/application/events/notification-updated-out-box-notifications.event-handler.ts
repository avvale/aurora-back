import { NotificationUpdatedOutBoxNotificationsEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedOutBoxNotificationsEvent)
export class NotificationUpdatedOutBoxNotificationsEventHandler implements IEventHandler<NotificationUpdatedOutBoxNotificationsEvent>
{
    handle(event: NotificationUpdatedOutBoxNotificationsEvent): void
    {
        // console.log('NotificationUpdatedOutBoxNotificationsEvent: ', event);
    }
}
