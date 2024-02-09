import { NotificationUpdatedInboxSettingsEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedInboxSettingsEvent)
export class NotificationUpdatedInboxSettingsEventHandler implements IEventHandler<NotificationUpdatedInboxSettingsEvent>
{
    handle(event: NotificationUpdatedInboxSettingsEvent): void
    {
        // console.log('NotificationUpdatedInboxSettingsEvent: ', event);
    }
}
