import { SupportUpdatedConfigEvent } from '@app/support/config';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SupportUpdatedConfigEvent)
export class SupportUpdatedConfigEventHandler
    implements IEventHandler<SupportUpdatedConfigEvent>
{
    handle(event: SupportUpdatedConfigEvent): void {
        // console.log('UpdatedConfigEvent: ', event);
    }
}
