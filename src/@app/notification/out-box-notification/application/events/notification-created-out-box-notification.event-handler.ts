import { NotificationCreatedOutBoxNotificationEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedOutBoxNotificationEvent)
export class NotificationCreatedOutBoxNotificationEventHandler implements IEventHandler<NotificationCreatedOutBoxNotificationEvent>
{
    handle(event: NotificationCreatedOutBoxNotificationEvent): void
    {
        // console.log('NotificationCreatedOutBoxNotificationEvent: ', event);
    }
}
