/* eslint-disable no-await-in-loop */
import { QueueDefinition, QUEUE_REDIS } from '@app/queue-manager/queue-manager.types';
import { CreateQueuesCommand } from '@app/queue-manager/queue/application/create/create-queues.command';
import { DeleteQueuesCommand } from '@app/queue-manager/queue/application/delete/delete-queues.command';
import { ICommandBus, Utils } from '@aurora-ts/core';
import { getQueueToken } from '@nestjs/bull';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { QueueStorage } from '../../../app.queues';

@Injectable()
export class QueueRedisImplementationService
{
    constructor(
        @Inject(QUEUE_REDIS) private readonly queueRedis,
        private readonly moduleRef: ModuleRef,
        private readonly commandBus: ICommandBus,
        private readonly configService: ConfigService,
    )
    {}

    async onApplicationBootstrap(): Promise<void>
    {
        const queueManagerPrefix = this.configService.get('QUEUE_MANAGER_PREFIX') || 'bull';

        // get all queue names from all bounded contexts
        const queueNames = Object.values(QueueStorage) as string[];

        // get all queues from redis
        const queues = await this.getQueues();
        const results = [];
        for (const queue of queues)
        {
            // delete all queues that are not register
            // in app.queues in redis database
            if (
                queue.prefix === queueManagerPrefix &&
                !queueNames.includes(queue.name)
            )
            {
                this.queueRedis.del(`${queue.prefix}:${queue.name}:id`);
                continue;
            }

            try
            {
                const queueInstance = this.moduleRef.get(
                    getQueueToken(queue.name),
                    { strict: false },
                );

                // get all promises
                results.push(queue);
                results.push(queueInstance.count());
                results.push(queueInstance.getJobCounts());
            }
            catch (error)
            {
                Logger.error(
                    error.message,
                    // error.stack,
                    'QueueRedisImplementationService',
                );
            }
        }

        Promise.all(results)
            .then(async response =>
            {
                const jobCounts = Utils.arrayGroup(response, 3);
                const payload = [];
                for (const jobCount of jobCounts)
                {

                    const queue = jobCount[0];
                    const {
                        waiting: waitingJobs,
                        active: activeJobs,
                        completed: completedJobs,
                        failed: failedJobs,
                        delayed: delayedJobs,
                        paused: pausedJobs,
                    } = jobCount[2];

                    payload.push({
                        id       : Utils.uuid(),
                        prefix   : queue.prefix,
                        name     : queue.name,
                        totalJobs: jobCount[1],
                        waitingJobs,
                        activeJobs,
                        completedJobs,
                        failedJobs,
                        delayedJobs,
                        pausedJobs,
                    });
                }

                // clean queues table
                await this.commandBus.dispatch(new DeleteQueuesCommand({
                    where: {},
                }));

                // create existing queues in redis
                await this.commandBus.dispatch(new CreateQueuesCommand(
                    payload,
                    {
                        repositoryOptions: {
                            updateOnDuplicate: ['totalJobs', 'waitingJobs', 'activeJobs', 'completedJobs', 'failedJobs', 'delayedJobs', 'pausedJobs'],
                        },
                    },
                ));

            });
    }

    // get all queues from redis
    async getQueues(): Promise<QueueDefinition[]>
    {
        const queueNameRegExp = new RegExp('(.*):(.*):id');
        const keys = await this.queueRedis.keys('*:*:id');
        const queues = keys.map(function(key)
        {
            const match = queueNameRegExp.exec(key);
            if (match)
            {
                return {
                    prefix: match[1],
                    name  : match[2],
                };
            }
        });

        return queues;
    }
}