import { SupportDeletedConfigEvent } from '@app/support/config';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SupportDeletedConfigEvent)
export class SupportDeletedConfigEventHandler
    implements IEventHandler<SupportDeletedConfigEvent>
{
    handle(event: SupportDeletedConfigEvent): void {
        // console.log('SupportDeletedConfigEvent: ', event);
    }
}
