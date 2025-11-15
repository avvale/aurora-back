import { CQMetadata } from '@aurorajs.dev/core';

export class SupportCreatedConfigEvent {
    constructor(
        public readonly event: {
            payload: {
                id: string;
                apiKey: string;
                listId: string;
                createdAt: string;
                updatedAt: string;
                deletedAt: string;
            };
            cQMetadata?: CQMetadata;
        },
    ) {}
}
