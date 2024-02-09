import { NotificationUpdatedInboxesEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedInboxesEvent)
export class NotificationUpdatedInboxesEventHandler implements IEventHandler<NotificationUpdatedInboxesEvent>
{
    handle(event: NotificationUpdatedInboxesEvent): void
    {
        // console.log('NotificationUpdatedInboxesEvent: ', event);
    }
}
