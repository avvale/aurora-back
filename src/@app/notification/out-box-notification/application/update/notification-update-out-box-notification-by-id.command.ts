import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class NotificationUpdateOutBoxNotificationByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            sort?: number;
            tenantId?: string;
            accountIds?: string[];
            accountTenantOperator?: string;
            tenantIds?: string[];
            scopes?: string[];
            isImportant?: boolean;
            subject?: string;
            body?: string;
            attachments?: any;
            meta?: any;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
