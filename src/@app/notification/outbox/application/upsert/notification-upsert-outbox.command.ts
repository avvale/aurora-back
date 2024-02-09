import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationUpsertOutboxCommand
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
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
