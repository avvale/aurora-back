import { CQMetadata } from '@aurorajs.dev/core';

export class WhatsappUpsertWebhookCommand
{
    constructor(
        public readonly payload: {
            id: string;
            payload?: any;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
