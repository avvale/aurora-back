import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerDeleteJobByIdHandler } from '../handlers/queue-manager-delete-job-by-id.handler';
import { QueueManagerJob } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.delete')
export class QueueManagerDeleteJobByIdResolver
{
    constructor(
        private readonly handler: QueueManagerDeleteJobByIdHandler,
    ) {}

    @Mutation('queueManagerDeleteJobById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}