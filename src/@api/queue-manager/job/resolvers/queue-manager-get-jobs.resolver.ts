import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerGetJobsHandler } from '../handlers/queue-manager-get-jobs.handler';
import { QueueManagerJob } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.get')
export class QueueManagerGetJobsResolver
{
    constructor(
        private readonly handler: QueueManagerGetJobsHandler,
    ) {}

    @Query('queueManagerGetJobs')
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