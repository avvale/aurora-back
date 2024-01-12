import { SearchEngineUpdatedCollectionsEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineUpdatedCollectionsEvent)
export class SearchEngineUpdatedCollectionsEventHandler implements IEventHandler<SearchEngineUpdatedCollectionsEvent>
{
    handle(event: SearchEngineUpdatedCollectionsEvent): void
    {
        // console.log('SearchEngineUpdatedCollectionsEvent: ', event);
    }
}
