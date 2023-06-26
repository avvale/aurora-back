import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineCreatedCollectionsEvent } from './search-engine-created-collections.event';

@EventsHandler(SearchEngineCreatedCollectionsEvent)
export class SearchEngineCreatedCollectionsEventHandler implements IEventHandler<SearchEngineCreatedCollectionsEvent>
{
    handle(event: SearchEngineCreatedCollectionsEvent): void
    {
        // console.log('CreatedCollectionsEvent: ', event);
    }
}