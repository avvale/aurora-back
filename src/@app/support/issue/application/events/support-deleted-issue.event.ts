import { CQMetadata } from '@aurorajs.dev/core';

export class SupportDeletedIssueEvent
{
    constructor(
        public readonly event: {
            payload: {
                id: string;
                externalId: string;
                externalStatus: string;
                accountId: string;
                accountUsername: string;
                frontVersion: string;
                backVersion: string;
                environment: string;
                subject: string;
                description: string;
                attachments: any;
                video: any;
                meta: any;
                createdAt: string;
                updatedAt: string;
                deletedAt: string;
            };
            cQMetadata?: CQMetadata;
        },
    ) {}
}
