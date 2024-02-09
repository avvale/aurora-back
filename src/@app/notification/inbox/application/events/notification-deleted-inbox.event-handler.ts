import { NotificationDeletedInboxEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedInboxEvent)
export class NotificationDeletedInboxEventHandler implements IEventHandler<NotificationDeletedInboxEvent>
{
    handle(event: NotificationDeletedInboxEvent): void
    {
        // console.log('NotificationDeletedInboxEvent: ', event);
    }
}
