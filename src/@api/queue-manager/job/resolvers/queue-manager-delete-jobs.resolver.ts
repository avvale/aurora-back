import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerDeleteJobsHandler } from '../handlers/queue-manager-delete-jobs.handler';
import { QueueManagerJob } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.delete')
export class QueueManagerDeleteJobsResolver
{
    constructor(
        private readonly handler: QueueManagerDeleteJobsHandler,
    ) {}

    @Mutation('queueManagerDeleteJobs')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}