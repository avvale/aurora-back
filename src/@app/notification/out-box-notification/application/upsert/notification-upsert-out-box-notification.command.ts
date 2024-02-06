import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationUpsertOutBoxNotificationCommand
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
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
