import { IQueryBus, QueryStatement } from '@aurora-ts/core';
import { getQueueToken } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

// @app
import { Pagination } from '@api/graphql';
import { QueueStorage } from 'src/app.queues';
import { ModuleRef } from '@nestjs/core';
import { FindQueueByIdQuery } from '@app/queue-manager/queue/application/find/find-queue-by-id.query';


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
        // get queue from database
        const queue = await this.queryBus.ask(new FindQueueByIdQuery(
            queryStatement.where.queueId,
        ));

        // get queue from redis database
        const queueInstance: Queue = this.moduleRef.get(
            getQueueToken(queue.name),
            { strict: false },
        );

        // get all jobs from redis database
        //'completed' | 'waiting' | 'active' | 'delayed' | 'failed'| 'paused';
        const jobs = await queueInstance.getJobs(
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