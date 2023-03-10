import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpdateJobByIdHandler } from '../handlers/queue-manager-update-job-by-id.handler';
import { QueueManagerJob, QueueManagerUpdateJobByIdInput } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.update')
export class QueueManagerUpdateJobByIdResolver
{
    constructor(
        private readonly handler: QueueManagerUpdateJobByIdHandler,
    ) {}

    @Mutation('queueManagerUpdateJobById')
    async main(
        @Args('payload') payload: QueueManagerUpdateJobByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}