import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineCreatedCollectionEvent } from './search-engine-created-collection.event';

@EventsHandler(SearchEngineCreatedCollectionEvent)
export class SearchEngineCreatedCollectionEventHandler implements IEventHandler<SearchEngineCreatedCollectionEvent>
{
    handle(event: SearchEngineCreatedCollectionEvent): void
    {
        // console.log('SearchEngineCreatedCollectionEvent: ', event);
    }
}