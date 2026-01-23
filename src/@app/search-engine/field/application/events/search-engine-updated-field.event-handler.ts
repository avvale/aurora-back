import { SearchEngineUpdatedFieldEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineUpdatedFieldEvent)
export class SearchEngineUpdatedFieldEventHandler
  implements IEventHandler<SearchEngineUpdatedFieldEvent>
{
  handle(event: SearchEngineUpdatedFieldEvent): void {
    // console.log('UpdatedFieldEvent: ', event);
  }
}
