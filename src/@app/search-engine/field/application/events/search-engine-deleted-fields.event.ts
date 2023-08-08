import { SearchEngineDeletedFieldEvent } from './search-engine-deleted-field.event';

export class SearchEngineDeletedFieldsEvent
{
    constructor(
        public readonly fields: SearchEngineDeletedFieldEvent[],
    ) {}
}
