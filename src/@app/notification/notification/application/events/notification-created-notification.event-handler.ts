import { NotificationCreatedNotificationEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedNotificationEvent)
export class NotificationCreatedNotificationEventHandler implements IEventHandler<NotificationCreatedNotificationEvent>
{
    handle(event: NotificationCreatedNotificationEvent): void
    {
        // console.log('NotificationCreatedNotificationEvent: ', event);
    }
}
