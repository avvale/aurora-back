export class SearchEngineUpdatedFieldEvent
{
    constructor(
        public readonly id: string,
        public readonly collectionId: string,
        public readonly name: string,
        public readonly type: string,
        public readonly isNullable: boolean,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}