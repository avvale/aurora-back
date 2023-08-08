import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SearchEngineDeletedFieldsEvent } from './search-engine-deleted-fields.event';

@EventsHandler(SearchEngineDeletedFieldsEvent)
export class SearchEngineDeletedFieldsEventHandler implements IEventHandler<SearchEngineDeletedFieldsEvent>
{
    handle(event: SearchEngineDeletedFieldsEvent): void
    {
        // console.log('DeletedFieldsEvent: ', event);
    }
}
