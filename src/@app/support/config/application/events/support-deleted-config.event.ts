import { CQMetadata } from '@aurorajs.dev/core';

export class SupportDeletedConfigEvent {
    constructor(
        public readonly event: {
            payload: {
                id: string;
                rowId: number;
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
