import { IQueryBus, QueryStatement } from '@aurora-ts/core';
import { getQueueToken } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

// @app
import { Pagination } from '@api/graphql';
import { QueueStorage } from 'src/app.queues';
import { ModuleRef } from '@nestjs/core';


@Injectable()
export class QueueManagerPaginateJobsHandler
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
        const queue: Queue = this.moduleRef.get(
            getQueueToken(QueueStorage.COMMON_MAIL),
            { strict: false },
        );
        //'completed' | 'waiting' | 'active' | 'delayed' | 'failed'| 'paused';
        const jobs = await queue.getJobs(
            ['completed', 'waiting', 'active', 'delayed', 'failed', 'paused'],
            queryStatement.offset,
            queryStatement.limit,
        );

        return {
            total: 0,
            count: jobs.length,
            rows : jobs,
        };
    }
}