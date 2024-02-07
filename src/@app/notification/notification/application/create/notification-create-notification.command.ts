import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationCreateNotificationCommand
{
    constructor(
        public readonly payload: {
            id: string;
            tenantId?: string;
            status: string;
            accountIds?: string[];
            tenantIds?: string[];
            scopes?: string[];
            sendAt?: string;
            isImportant: boolean;
            subject: string;
            body: string;
            attachments?: any;
            totalRecipients: number;
            reads: number;
            meta?: any;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
