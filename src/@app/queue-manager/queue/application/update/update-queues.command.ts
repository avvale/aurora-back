import { QueryStatement } from '@aurora-ts/core';
import { CQMetadata } from '@aurora-ts/core';

export class UpdateQueuesCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            prefix?: string;
            name?: string;
            waitingJobs?: number;
            activeJobs?: number;
            completedJobs?: number;
            failedJobs?: number;
            delayedJobs?: number;
            pausedJobs?: number;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}