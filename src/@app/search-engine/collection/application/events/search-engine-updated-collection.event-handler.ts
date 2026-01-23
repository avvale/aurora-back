import { SearchEngineUpdatedCollectionEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineUpdatedCollectionEvent)
export class SearchEngineUpdatedCollectionEventHandler
  implements IEventHandler<SearchEngineUpdatedCollectionEvent>
{
  handle(event: SearchEngineUpdatedCollectionEvent): void {
    // console.log('UpdatedCollectionEvent: ', event);
  }
}
