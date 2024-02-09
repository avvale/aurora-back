import { NotificationCreateOutboxInput } from '@api/graphql';
import { NotificationCreateOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.create')
export class NotificationCreateOutboxesResolver
{
    constructor(
        private readonly handler: NotificationCreateOutboxesHandler,
    ) {}

    @Mutation('notificationCreateOutboxes')
    async main(
        @Args('payload') payload: NotificationCreateOutboxInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
