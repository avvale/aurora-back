import { CQMetadata } from '@aurorajs.dev/core';

export class SupportCreateIssueCommand {
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
            subject: string;
            description: string;
            attachments?: any;
            video?: any;
            meta?: any;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
