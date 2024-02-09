import { NotificationCreatedInboxesEvent } from '@app/notification/inbox';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedInboxesEvent)
export class NotificationCreatedInboxesEventHandler implements IEventHandler<NotificationCreatedInboxesEvent>
{
    handle(event: NotificationCreatedInboxesEvent): void
    {
        // console.log('CreatedInboxesEvent: ', event);
    }
}
