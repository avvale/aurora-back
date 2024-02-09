import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class NotificationUpdateAndIncrementOutboxesCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            notificationId?: string;
            sort?: number;
            accountRecipientIds?: string[];
            tenantRecipientIds?: string[];
            scopeRecipients?: string[];
            meta?: any;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
