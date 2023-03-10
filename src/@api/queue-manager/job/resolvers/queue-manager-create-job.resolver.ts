import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerCreateJobHandler } from '../handlers/queue-manager-create-job.handler';
import { QueueManagerJob, QueueManagerCreateJobInput } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.create')
export class QueueManagerCreateJobResolver
{
    constructor(
        private readonly handler: QueueManagerCreateJobHandler,
    ) {}

    @Mutation('queueManagerCreateJob')
    async main(
        @Args('payload') payload: QueueManagerCreateJobInput,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}