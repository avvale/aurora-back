export class SearchEngineCreatedCollectionEvent
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly documentsNumber: number,
        public readonly defaultSortingField: string,
        public readonly numMemoryShards: number,
        public readonly timestampCreatedAt: number,
        public readonly isEnableNestedFields: boolean,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}