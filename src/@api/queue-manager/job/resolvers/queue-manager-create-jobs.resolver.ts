import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerCreateJobsHandler } from '../handlers/queue-manager-create-jobs.handler';
import { QueueManagerCreateJobInput } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.create')
export class QueueManagerCreateJobsResolver
{
    constructor(
        private readonly handler: QueueManagerCreateJobsHandler,
    ) {}

    @Mutation('queueManagerCreateJobs')
    async main(
        @Args('payload') payload: QueueManagerCreateJobInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}