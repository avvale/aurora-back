import { NotificationUpdatedAndIncrementedOutboxesEvent } from '@app/notification/outbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedAndIncrementedOutboxesEvent)
export class NotificationUpdatedAndIncrementedOutboxesEventHandler implements IEventHandler<NotificationUpdatedAndIncrementedOutboxesEvent>
{
    handle(event: NotificationUpdatedAndIncrementedOutboxesEvent): void
    {
        // console.log('NotificationUpdatedAndIncrementedOutboxesEvent: ', event);
    }
}
