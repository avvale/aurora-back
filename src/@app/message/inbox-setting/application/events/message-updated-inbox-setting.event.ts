import { CQMetadata } from '@aurorajs.dev/core';

export class MessageUpdatedInboxSettingEvent {
    constructor(
        public readonly event: {
            payload: {
                id: string;
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
