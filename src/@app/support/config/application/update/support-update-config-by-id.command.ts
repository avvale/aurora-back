import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SupportUpdateConfigByIdCommand {
    constructor(
        public readonly payload: {
            id: string;
            apiKey?: string;
            listId?: string;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
