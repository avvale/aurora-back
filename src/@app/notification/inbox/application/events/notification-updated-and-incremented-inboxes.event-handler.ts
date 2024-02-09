import { NotificationUpdatedAndIncrementedInboxesEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedAndIncrementedInboxesEvent)
export class NotificationUpdatedAndIncrementedInboxesEventHandler implements IEventHandler<NotificationUpdatedAndIncrementedInboxesEvent>
{
    handle(event: NotificationUpdatedAndIncrementedInboxesEvent): void
    {
        // console.log('NotificationUpdatedAndIncrementedInboxesEvent: ', event);
    }
}
