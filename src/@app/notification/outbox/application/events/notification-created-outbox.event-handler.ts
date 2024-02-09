import { NotificationCreatedOutboxEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedOutboxEvent)
export class NotificationCreatedOutboxEventHandler implements IEventHandler<NotificationCreatedOutboxEvent>
{
    handle(event: NotificationCreatedOutboxEvent): void
    {
        // console.log('NotificationCreatedOutboxEvent: ', event);
    }
}
