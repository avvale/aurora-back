import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineDeletedCollectionsEvent } from './search-engine-deleted-collections.event';

@EventsHandler(SearchEngineDeletedCollectionsEvent)
export class SearchEngineDeletedCollectionsEventHandler implements IEventHandler<SearchEngineDeletedCollectionsEvent>
{
    handle(event: SearchEngineDeletedCollectionsEvent): void
    {
        // console.log('DeletedCollectionsEvent: ', event);
    }
}