import { NotificationUpdatedAndIncrementedInboxSettingsEvent } from '@app/notification/inbox-setting';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotificationUpdatedAndIncrementedInboxSettingsEvent)
export class NotificationUpdatedAndIncrementedInboxSettingsEventHandler implements IEventHandler<NotificationUpdatedAndIncrementedInboxSettingsEvent>
{
    handle(event: NotificationUpdatedAndIncrementedInboxSettingsEvent): void
    {
        // console.log('NotificationUpdatedAndIncrementedInboxSettingsEvent: ', event);
    }
}
