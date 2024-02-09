import { NotificationUpdatedInboxEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedInboxEvent)
export class NotificationUpdatedInboxEventHandler implements IEventHandler<NotificationUpdatedInboxEvent>
{
    handle(event: NotificationUpdatedInboxEvent): void
    {
        // console.log('UpdatedInboxEvent: ', event);
    }
}
