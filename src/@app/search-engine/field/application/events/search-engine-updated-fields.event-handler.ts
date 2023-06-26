import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineUpdatedFieldsEvent } from './search-engine-updated-fields.event';

@EventsHandler(SearchEngineUpdatedFieldsEvent)
export class SearchEngineUpdatedFieldsEventHandler implements IEventHandler<SearchEngineUpdatedFieldsEvent>
{
    handle(event: SearchEngineUpdatedFieldsEvent): void
    {
        // console.log('SearchEngineUpdatedFieldsEvent: ', event);
    }
}