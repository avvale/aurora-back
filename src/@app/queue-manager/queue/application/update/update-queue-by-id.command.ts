import { QueryStatement } from '@aurora-ts/core';
import { CQMetadata } from '@aurora-ts/core';

export class UpdateQueueByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            prefix?: string;
            name?: string;
            waitingJobs?: number;
            activeJobs?: number;
            completedJobs?: number;
            failedJobs?: number;
            delayedJobs?: number;
            pausedJobs?: number;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}