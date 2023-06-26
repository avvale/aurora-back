import { QueueManagerCreateJobRegistryHandler } from '../handlers/queue-manager-create-job-registry.handler';
import { QueueManagerCreateJobRegistryInput, QueueManagerJobRegistry } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('queueManager.jobRegistry.create')
export class QueueManagerCreateJobRegistryResolver
{
    constructor(
        private readonly handler: QueueManagerCreateJobRegistryHandler,
    ) {}

    @Mutation('queueManagerCreateJobRegistry')
    async main(
        @Args('payload') payload: QueueManagerCreateJobRegistryInput,
        @Timezone() timezone?: string,
    ): Promise<QueueManagerJobRegistry>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}