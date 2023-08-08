import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class SearchEngineUpdateFieldsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            collectionId?: string;
            name?: string;
            type?: string;
            isNullable?: boolean;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
