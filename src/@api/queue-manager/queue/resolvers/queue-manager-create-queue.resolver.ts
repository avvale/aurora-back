import { QueueManagerCreateQueueHandler } from '../handlers/queue-manager-create-queue.handler';
import { QueueManagerCreateQueueInput, QueueManagerQueue } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('queueManager.queue.create')
export class QueueManagerCreateQueueResolver
{
    constructor(
        private readonly handler: QueueManagerCreateQueueHandler,
    ) {}

    @Mutation('queueManagerCreateQueue')
    async main(
        @Args('payload') payload: QueueManagerCreateQueueInput,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerQueue>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}