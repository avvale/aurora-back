import { SearchEngineDeletedFieldsEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineDeletedFieldsEvent)
export class SearchEngineDeletedFieldsEventHandler
  implements IEventHandler<SearchEngineDeletedFieldsEvent>
{
  handle(event: SearchEngineDeletedFieldsEvent): void {
    // console.log('DeletedFieldsEvent: ', event);
  }
}
