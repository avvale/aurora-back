import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class WhatsappUpdateWebhookByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            payload?: any;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
