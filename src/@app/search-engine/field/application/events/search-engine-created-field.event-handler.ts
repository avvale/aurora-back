import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineCreatedFieldEvent } from './search-engine-created-field.event';

@EventsHandler(SearchEngineCreatedFieldEvent)
export class SearchEngineCreatedFieldEventHandler implements IEventHandler<SearchEngineCreatedFieldEvent>
{
    handle(event: SearchEngineCreatedFieldEvent): void
    {
        // console.log('SearchEngineCreatedFieldEvent: ', event);
    }
}