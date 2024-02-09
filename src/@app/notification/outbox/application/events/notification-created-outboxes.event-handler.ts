import { NotificationCreatedOutboxesEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedOutboxesEvent)
export class NotificationCreatedOutboxesEventHandler implements IEventHandler<NotificationCreatedOutboxesEvent>
{
    handle(event: NotificationCreatedOutboxesEvent): void
    {
        // console.log('CreatedOutboxesEvent: ', event);
    }
}
