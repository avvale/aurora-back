import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class NotificationUpdateOutboxByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            notificationId?: string;
            sort?: number;
            accountRecipientIds?: string[];
            tenantRecipientIds?: string[];
            scopeRecipients?: string[];
            meta?: any;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
