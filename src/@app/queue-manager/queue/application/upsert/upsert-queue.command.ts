import { CQMetadata } from '@aurora-ts/core';

export class UpsertQueueCommand
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
        public readonly cQMetadata?: CQMetadata,
    ) {}
}