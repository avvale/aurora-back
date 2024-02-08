import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class NotificationUpdateNotificationsCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            tenantIds?: string[];
            status?: string;
            accountRecipientIds?: string[];
            tenantRecipientIds?: string[];
            scopeRecipientIds?: string[];
            sendAt?: string;
            isImportant?: boolean;
            subject?: string;
            body?: string;
            attachments?: any;
            totalRecipients?: number;
            reads?: number;
            meta?: any;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
