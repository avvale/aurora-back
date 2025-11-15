import { SupportCreatedConfigsEvent } from '@app/support/config';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SupportCreatedConfigsEvent)
export class SupportCreatedConfigsEventHandler
    implements IEventHandler<SupportCreatedConfigsEvent>
{
    handle(event: SupportCreatedConfigsEvent): void {
        // console.log('CreatedConfigsEvent: ', event);
    }
}
