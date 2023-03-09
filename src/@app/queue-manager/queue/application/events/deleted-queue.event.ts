export class DeletedQueueEvent
{
    constructor(
        public readonly id: string,
        public readonly prefix: string,
        public readonly name: string,
        public readonly waitingJobs: number,
        public readonly activeJobs: number,
        public readonly completedJobs: number,
        public readonly failedJobs: number,
        public readonly delayedJobs: number,
        public readonly pausedJobs: number,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}