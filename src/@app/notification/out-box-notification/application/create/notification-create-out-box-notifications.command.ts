import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationCreateOutBoxNotificationsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            tenantId?: string;
            accountIds?: string[];
            accountTenantOperator?: string;
            tenantIds?: string[];
            scopes?: string[];
            isImportant: boolean;
            subject: string;
            body: string;
            attachments?: any;
            meta?: any;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
