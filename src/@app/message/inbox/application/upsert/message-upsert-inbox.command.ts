import { CQMetadata } from '@aurorajs.dev/core';

export class MessageUpsertInboxCommand
{
    constructor(
        public readonly payload: {
            id: string;
            tenantIds?: string[];
            messageId?: string;
            sort?: number;
            accountId?: string;
            accountCode?: string;
            isImportant?: boolean;
            subject?: string;
            body?: string;
            attachments?: any;
            isRead?: boolean;
            isReadAtLeastOnce?: boolean;
            meta?: any;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
