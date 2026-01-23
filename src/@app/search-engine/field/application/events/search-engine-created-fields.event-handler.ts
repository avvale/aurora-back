import { SearchEngineCreatedFieldsEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineCreatedFieldsEvent)
export class SearchEngineCreatedFieldsEventHandler
  implements IEventHandler<SearchEngineCreatedFieldsEvent>
{
  handle(event: SearchEngineCreatedFieldsEvent): void {
    // console.log('CreatedFieldsEvent: ', event);
  }
}
