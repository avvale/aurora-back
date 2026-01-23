import { SearchEngineCreatedCollectionsEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineCreatedCollectionsEvent)
export class SearchEngineCreatedCollectionsEventHandler
  implements IEventHandler<SearchEngineCreatedCollectionsEvent>
{
  handle(event: SearchEngineCreatedCollectionsEvent): void {
    // console.log('CreatedCollectionsEvent: ', event);
  }
}
