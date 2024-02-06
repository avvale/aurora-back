import { NotificationUpdatedAndIncrementedOutBoxNotificationsEvent } from '@app/notification/out-box-notification';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedAndIncrementedOutBoxNotificationsEvent)
export class NotificationUpdatedAndIncrementedOutBoxNotificationsEventHandler implements IEventHandler<NotificationUpdatedAndIncrementedOutBoxNotificationsEvent>
{
    handle(event: NotificationUpdatedAndIncrementedOutBoxNotificationsEvent): void
    {
        // console.log('NotificationUpdatedAndIncrementedOutBoxNotificationsEvent: ', event);
    }
}
