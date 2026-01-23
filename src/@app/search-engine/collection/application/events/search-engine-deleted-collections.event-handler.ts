import { SearchEngineDeletedCollectionsEvent } from '@app/search-engine/collection';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineDeletedCollectionsEvent)
export class SearchEngineDeletedCollectionsEventHandler
  implements IEventHandler<SearchEngineDeletedCollectionsEvent>
{
  handle(event: SearchEngineDeletedCollectionsEvent): void {
    // console.log('DeletedCollectionsEvent: ', event);
  }
}
