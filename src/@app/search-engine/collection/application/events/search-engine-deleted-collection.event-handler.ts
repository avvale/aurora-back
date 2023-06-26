import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineDeletedCollectionEvent } from './search-engine-deleted-collection.event';

@EventsHandler(SearchEngineDeletedCollectionEvent)
export class SearchEngineDeletedCollectionEventHandler implements IEventHandler<SearchEngineDeletedCollectionEvent>
{
    handle(event: SearchEngineDeletedCollectionEvent): void
    {
        // console.log('SearchEngineDeletedCollectionEvent: ', event);
    }
}