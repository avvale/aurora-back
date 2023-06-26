import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineUpdatedCollectionsEvent } from './search-engine-updated-collections.event';

@EventsHandler(SearchEngineUpdatedCollectionsEvent)
export class SearchEngineUpdatedCollectionsEventHandler implements IEventHandler<SearchEngineUpdatedCollectionsEvent>
{
    handle(event: SearchEngineUpdatedCollectionsEvent): void
    {
        // console.log('SearchEngineUpdatedCollectionsEvent: ', event);
    }
}