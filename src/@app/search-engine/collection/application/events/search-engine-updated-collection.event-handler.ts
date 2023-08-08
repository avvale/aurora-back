import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineUpdatedCollectionEvent } from './search-engine-updated-collection.event';

@EventsHandler(SearchEngineUpdatedCollectionEvent)
export class SearchEngineUpdatedCollectionEventHandler implements IEventHandler<SearchEngineUpdatedCollectionEvent>
{
    handle(event: SearchEngineUpdatedCollectionEvent): void
    {
        // console.log('UpdatedCollectionEvent: ', event);
    }
}
