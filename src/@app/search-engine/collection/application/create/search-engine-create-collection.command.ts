import { CQMetadata } from '@aurorajs.dev/core';

export class SearchEngineCreateCollectionCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            alias?: string;
            status: string;
            documentsNumber?: number;
            defaultSortingField?: string;
            numMemoryShards?: number;
            timestampCreatedAt?: number;
            isEnableNestedFields: boolean;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
