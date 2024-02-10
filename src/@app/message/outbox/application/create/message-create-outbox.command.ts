import { CQMetadata } from '@aurorajs.dev/core';

export class MessageCreateOutboxCommand
{
    constructor(
        public readonly payload: {
            id: string;
            messageId: string;
            sort: number;
            accountRecipientIds?: string[];
            tenantRecipientIds?: string[];
            scopeRecipients?: string[];
            meta?: any;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
