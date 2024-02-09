import { NotificationCreatedInboxSettingsEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationCreatedInboxSettingsEvent)
export class NotificationCreatedInboxSettingsEventHandler implements IEventHandler<NotificationCreatedInboxSettingsEvent>
{
    handle(event: NotificationCreatedInboxSettingsEvent): void
    {
        // console.log('CreatedInboxSettingsEvent: ', event);
    }
}
