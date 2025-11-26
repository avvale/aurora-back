import { CQMetadata } from '@aurorajs.dev/core';

export class MessageDeletedInboxSettingEvent {
    constructor(
        public readonly event: {
            payload: {
                id: string;
                rowId: number;
                accountId: string;
                sort: number;
                createdAt: string;
                updatedAt: string;
                deletedAt: string;
            };
            cQMetadata?: CQMetadata;
        },
    ) {}
}
