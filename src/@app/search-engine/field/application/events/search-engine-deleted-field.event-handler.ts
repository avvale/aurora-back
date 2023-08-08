import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineDeletedFieldEvent } from './search-engine-deleted-field.event';

@EventsHandler(SearchEngineDeletedFieldEvent)
export class SearchEngineDeletedFieldEventHandler implements IEventHandler<SearchEngineDeletedFieldEvent>
{
    handle(event: SearchEngineDeletedFieldEvent): void
    {
        // console.log('SearchEngineDeletedFieldEvent: ', event);
    }
}
