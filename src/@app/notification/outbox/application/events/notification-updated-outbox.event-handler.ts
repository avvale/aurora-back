import { NotificationUpdatedOutboxEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedOutboxEvent)
export class NotificationUpdatedOutboxEventHandler implements IEventHandler<NotificationUpdatedOutboxEvent>
{
    handle(event: NotificationUpdatedOutboxEvent): void
    {
        // console.log('UpdatedOutboxEvent: ', event);
    }
}
