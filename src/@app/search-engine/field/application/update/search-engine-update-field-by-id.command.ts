import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SearchEngineUpdateFieldByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            collectionId?: string;
            name?: string;
            type?: string;
            isNullable?: boolean;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
