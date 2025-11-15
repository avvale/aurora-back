import { SupportCreatedConfigEvent } from '@app/support/config';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SupportCreatedConfigEvent)
export class SupportCreatedConfigEventHandler
    implements IEventHandler<SupportCreatedConfigEvent>
{
    handle(event: SupportCreatedConfigEvent): void {
        // console.log('SupportCreatedConfigEvent: ', event);
    }
}
