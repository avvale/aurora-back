import { SearchEngineUpdatedCollectionEvent } from './search-engine-updated-collection.event';

export class SearchEngineUpdatedCollectionsEvent
{
    constructor(
        public readonly collections: SearchEngineUpdatedCollectionEvent[],
    ) {}
}
