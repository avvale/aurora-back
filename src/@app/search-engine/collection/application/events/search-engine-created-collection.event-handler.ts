import { SearchEngineCreatedCollectionEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineCreatedCollectionEvent)
export class SearchEngineCreatedCollectionEventHandler
  implements IEventHandler<SearchEngineCreatedCollectionEvent>
{
  handle(event: SearchEngineCreatedCollectionEvent): void {
    // console.log('SearchEngineCreatedCollectionEvent: ', event);
  }
}
