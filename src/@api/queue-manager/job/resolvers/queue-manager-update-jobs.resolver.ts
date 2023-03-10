import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpdateJobsHandler } from '../handlers/queue-manager-update-jobs.handler';
import { QueueManagerJob, QueueManagerUpdateJobsInput } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.update')
export class QueueManagerUpdateJobsResolver
{
    constructor(
        private readonly handler: QueueManagerUpdateJobsHandler,
    ) {}

    @Mutation('queueManagerUpdateJobs')
    async main(
        @Args('payload') payload: QueueManagerUpdateJobsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}