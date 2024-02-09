import { NotificationDeletedInboxesEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedInboxesEvent)
export class NotificationDeletedInboxesEventHandler implements IEventHandler<NotificationDeletedInboxesEvent>
{
    handle(event: NotificationDeletedInboxesEvent): void
    {
        // console.log('DeletedInboxesEvent: ', event);
    }
}
