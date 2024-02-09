import { NotificationDeletedOutboxEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedOutboxEvent)
export class NotificationDeletedOutboxEventHandler implements IEventHandler<NotificationDeletedOutboxEvent>
{
    handle(event: NotificationDeletedOutboxEvent): void
    {
        // console.log('NotificationDeletedOutboxEvent: ', event);
    }
}
