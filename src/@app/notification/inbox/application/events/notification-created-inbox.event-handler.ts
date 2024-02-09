import { NotificationCreatedInboxEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedInboxEvent)
export class NotificationCreatedInboxEventHandler implements IEventHandler<NotificationCreatedInboxEvent>
{
    handle(event: NotificationCreatedInboxEvent): void
    {
        // console.log('NotificationCreatedInboxEvent: ', event);
    }
}
