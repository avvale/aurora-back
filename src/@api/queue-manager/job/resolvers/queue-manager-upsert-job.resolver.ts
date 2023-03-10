import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpsertJobHandler } from '../handlers/queue-manager-upsert-job.handler';
import { QueueManagerJob, QueueManagerUpdateJobByIdInput } from '@api/graphql';

@Resolver()
@Auth('queueManager.job.upsert')
export class QueueManagerUpsertJobResolver
{
    constructor(
        private readonly handler: QueueManagerUpsertJobHandler,
    ) {}

    @Mutation('queueManagerUpsertJob')
    async main(
        @Args('payload') payload: QueueManagerUpdateJobByIdInput,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJob>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}