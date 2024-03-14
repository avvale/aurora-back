import { CQMetadata } from '@aurorajs.dev/core';

export class WhatsappRawSQLWebhooksQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
