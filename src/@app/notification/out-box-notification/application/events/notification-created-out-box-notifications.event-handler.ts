import { NotificationCreatedOutBoxNotificationsEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedOutBoxNotificationsEvent)
export class NotificationCreatedOutBoxNotificationsEventHandler implements IEventHandler<NotificationCreatedOutBoxNotificationsEvent>
{
    handle(event: NotificationCreatedOutBoxNotificationsEvent): void
    {
        // console.log('CreatedOutBoxNotificationsEvent: ', event);
    }
}
