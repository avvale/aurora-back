import { CQMetadata } from '@aurorajs.dev/core';

export class SupportCreateConfigCommand {
    constructor(
        public readonly payload: {
            id: string;
            apiKey?: string;
            listId?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
