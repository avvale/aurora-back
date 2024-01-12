import { SearchEngineDeletedFieldEvent } from '@app/search-engine/field';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(SearchEngineDeletedFieldEvent)
export class SearchEngineDeletedFieldEventHandler implements IEventHandler<SearchEngineDeletedFieldEvent>
{
    handle(event: SearchEngineDeletedFieldEvent): void
    {
        // console.log('SearchEngineDeletedFieldEvent: ', event);
    }
}
