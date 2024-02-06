import { NotificationUpdatedOutBoxNotificationEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedOutBoxNotificationEvent)
export class NotificationUpdatedOutBoxNotificationEventHandler implements IEventHandler<NotificationUpdatedOutBoxNotificationEvent>
{
    handle(event: NotificationUpdatedOutBoxNotificationEvent): void
    {
        // console.log('UpdatedOutBoxNotificationEvent: ', event);
    }
}
