import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SearchEngineUpdateCollectionsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            name?: string;
            alias?: string;
            status?: string;
            documentsNumber?: number;
            defaultSortingField?: string;
            numMemoryShards?: number;
            timestampCreatedAt?: number;
            isEnableNestedFields?: boolean;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
