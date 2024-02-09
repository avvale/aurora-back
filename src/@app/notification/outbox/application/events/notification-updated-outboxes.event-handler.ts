import { NotificationUpdatedOutboxesEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedOutboxesEvent)
export class NotificationUpdatedOutboxesEventHandler implements IEventHandler<NotificationUpdatedOutboxesEvent>
{
    handle(event: NotificationUpdatedOutboxesEvent): void
    {
        // console.log('NotificationUpdatedOutboxesEvent: ', event);
    }
}
