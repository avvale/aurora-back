import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerFindJobHandler } from '../handlers/queue-manager-find-job.handler';
import { QueueManagerJob } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.get')
export class QueueManagerFindJobResolver
{
    constructor(
        private readonly handler: QueueManagerFindJobHandler,
    ) {}

    @Query('queueManagerFindJob')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}