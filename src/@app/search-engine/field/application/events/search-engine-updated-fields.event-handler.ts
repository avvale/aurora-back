import { SearchEngineUpdatedFieldsEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineUpdatedFieldsEvent)
export class SearchEngineUpdatedFieldsEventHandler implements IEventHandler<SearchEngineUpdatedFieldsEvent>
{
    handle(event: SearchEngineUpdatedFieldsEvent): void
    {
        // console.log('SearchEngineUpdatedFieldsEvent: ', event);
    }
}
