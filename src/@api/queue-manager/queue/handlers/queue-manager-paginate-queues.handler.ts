import { ModuleRef } from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { PaginateQueuesQuery } from '@app/queue-manager/queue/application/paginate/paginate-queues.query';
import { Pagination } from '@api/graphql';
import { getQueueToken } from '@nestjs/bull';

@Injectable()
export class QueueManagerPaginateQueuesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
        private readonly moduleRef: ModuleRef,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        const paginateQueuesQuery = await this.queryBus.ask(new PaginateQueuesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        paginateQueuesQuery.rows = paginateQueuesQuery
            .rows
            .map(async queue =>
            {
                const queueInstance = this.moduleRef.get(
                    getQueueToken(queue.name),
                    { strict: false },
                );

                const totalJobs = await queueInstance.count();
                const {
                    waiting: waitingJobs,
                    active: activeJobs,
                    completed: completedJobs,
                    failed: failedJobs,
                    delayed: delayedJobs,
                    paused: pausedJobs,
                } = await queueInstance.getJobCounts();

                return {
                    ...queue,
                    totalJobs,
                    waitingJobs,
                    activeJobs,
                    completedJobs,
                    failedJobs,
                    delayedJobs,
                    pausedJobs,
                };
            });

        return paginateQueuesQuery;
    }
}