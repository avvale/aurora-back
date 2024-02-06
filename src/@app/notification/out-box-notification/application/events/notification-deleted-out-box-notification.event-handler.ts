import { NotificationDeletedOutBoxNotificationEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedOutBoxNotificationEvent)
export class NotificationDeletedOutBoxNotificationEventHandler implements IEventHandler<NotificationDeletedOutBoxNotificationEvent>
{
    handle(event: NotificationDeletedOutBoxNotificationEvent): void
    {
        // console.log('NotificationDeletedOutBoxNotificationEvent: ', event);
    }
}
