import { SearchEngineDeletedCollectionEvent } from './search-engine-deleted-collection.event';

export class SearchEngineDeletedCollectionsEvent
{
    constructor(
        public readonly collections: SearchEngineDeletedCollectionEvent[],
    ) {}
}