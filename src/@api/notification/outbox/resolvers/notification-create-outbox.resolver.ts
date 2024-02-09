import { NotificationCreateOutboxInput, NotificationOutbox } from '@api/graphql';
import { NotificationCreateOutboxHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.create')
export class NotificationCreateOutboxResolver
{
    constructor(
        private readonly handler: NotificationCreateOutboxHandler,
    ) {}

    @Mutation('notificationCreateOutbox')
    async main(
        @Args('payload') payload: NotificationCreateOutboxInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
