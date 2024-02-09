import { NotificationDeletedInboxSettingsEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationDeletedInboxSettingsEvent)
export class NotificationDeletedInboxSettingsEventHandler implements IEventHandler<NotificationDeletedInboxSettingsEvent>
{
    handle(event: NotificationDeletedInboxSettingsEvent): void
    {
        // console.log('DeletedInboxSettingsEvent: ', event);
    }
}
