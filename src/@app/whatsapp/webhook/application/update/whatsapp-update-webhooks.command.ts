import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class WhatsappUpdateWebhooksCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            payload?: any;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
