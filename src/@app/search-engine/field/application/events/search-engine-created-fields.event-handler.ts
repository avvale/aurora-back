import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineCreatedFieldsEvent } from './search-engine-created-fields.event';

@EventsHandler(SearchEngineCreatedFieldsEvent)
export class SearchEngineCreatedFieldsEventHandler implements IEventHandler<SearchEngineCreatedFieldsEvent>
{
    handle(event: SearchEngineCreatedFieldsEvent): void
    {
        // console.log('CreatedFieldsEvent: ', event);
    }
}