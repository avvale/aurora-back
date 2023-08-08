import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineUpdatedFieldEvent } from './search-engine-updated-field.event';

@EventsHandler(SearchEngineUpdatedFieldEvent)
export class SearchEngineUpdatedFieldEventHandler implements IEventHandler<SearchEngineUpdatedFieldEvent>
{
    handle(event: SearchEngineUpdatedFieldEvent): void
    {
        // console.log('UpdatedFieldEvent: ', event);
    }
}
