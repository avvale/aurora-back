import { SearchEngineCreatedFieldEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineCreatedFieldEvent)
export class SearchEngineCreatedFieldEventHandler implements IEventHandler<SearchEngineCreatedFieldEvent>
{
    handle(event: SearchEngineCreatedFieldEvent): void
    {
        // console.log('SearchEngineCreatedFieldEvent: ', event);
    }
}
