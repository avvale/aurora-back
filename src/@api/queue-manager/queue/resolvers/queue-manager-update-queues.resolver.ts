import { QueueManagerUpdateQueuesHandler } from '../handlers/queue-manager-update-queues.handler';
import { QueueManagerQueue, QueueManagerUpdateQueuesInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('queueManager.queue.update')
export class QueueManagerUpdateQueuesResolver
{
    constructor(
        private readonly handler: QueueManagerUpdateQueuesHandler,
    ) {}

    @Mutation('queueManagerUpdateQueues')
    async main(
        @Args('payload') payload: QueueManagerUpdateQueuesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerQueue>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}