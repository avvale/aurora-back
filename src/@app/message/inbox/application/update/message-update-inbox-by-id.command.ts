import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class MessageUpdateInboxByIdCommand
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
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
