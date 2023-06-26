import { SearchEngineCreatedCollectionEvent } from './search-engine-created-collection.event';

export class SearchEngineCreatedCollectionsEvent
{
    constructor(
        public readonly collections: SearchEngineCreatedCollectionEvent[],
    ) {}
}