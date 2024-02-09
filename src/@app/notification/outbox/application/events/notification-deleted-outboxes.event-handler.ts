import { NotificationDeletedOutboxesEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedOutboxesEvent)
export class NotificationDeletedOutboxesEventHandler implements IEventHandler<NotificationDeletedOutboxesEvent>
{
    handle(event: NotificationDeletedOutboxesEvent): void
    {
        // console.log('DeletedOutboxesEvent: ', event);
    }
}
