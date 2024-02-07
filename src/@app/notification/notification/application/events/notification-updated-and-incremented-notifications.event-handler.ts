import { NotificationUpdatedAndIncrementedNotificationsEvent } from '@app/notification/notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedAndIncrementedNotificationsEvent)
export class NotificationUpdatedAndIncrementedNotificationsEventHandler implements IEventHandler<NotificationUpdatedAndIncrementedNotificationsEvent>
{
    handle(event: NotificationUpdatedAndIncrementedNotificationsEvent): void
    {
        // console.log('NotificationUpdatedAndIncrementedNotificationsEvent: ', event);
    }
}
