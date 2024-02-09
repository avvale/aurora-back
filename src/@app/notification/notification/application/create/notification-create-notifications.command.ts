import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationCreateNotificationsCommand
{
    constructor(
        public readonly payload: {
            id: string;
            tenantIds?: string[];
            status: string;
            accountRecipientIds?: string[];
            tenantRecipientIds?: string[];
            scopeRecipients?: string[];
            sendAt?: string;
            isImportant: boolean;
            subject: string;
            body: string;
            attachments?: any;
            totalRecipients: number;
            reads: number;
            meta?: any;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
