import { SearchEngineDeletedCollectionEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineDeletedCollectionEvent)
export class SearchEngineDeletedCollectionEventHandler implements IEventHandler<SearchEngineDeletedCollectionEvent>
{
    handle(event: SearchEngineDeletedCollectionEvent): void
    {
        // console.log('SearchEngineDeletedCollectionEvent: ', event);
    }
}
