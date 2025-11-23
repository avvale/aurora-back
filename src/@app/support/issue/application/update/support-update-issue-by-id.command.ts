import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class SupportUpdateIssueByIdCommand {
    constructor(
        public readonly payload: {
            id: string;
            externalId?: string;
            externalStatus?: string;
            accountId?: string;
            accountUsername?: string;
            frontVersion?: string;
            backVersion?: string;
            environment?: string;
            subject?: string;
            description?: string;
            attachments?: any;
            screenRecording?: any;
            meta?: any;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
