import { SearchEngineCreatedFieldEvent } from './search-engine-created-field.event';

export class SearchEngineCreatedFieldsEvent
{
    constructor(
        public readonly fields: SearchEngineCreatedFieldEvent[],
    ) {}
}