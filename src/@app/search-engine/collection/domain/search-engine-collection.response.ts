import { SearchEngineFieldResponse } from '@app/search-engine/field';

export class SearchEngineCollectionResponse
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly alias: string,
        public readonly status: string,
        public readonly documentsNumber: number,
        public readonly defaultSortingField: string,
        public readonly numMemoryShards: number,
        public readonly timestampCreatedAt: number,
        public readonly isEnableNestedFields: boolean,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly fields: SearchEngineFieldResponse[],
    ) {}
}