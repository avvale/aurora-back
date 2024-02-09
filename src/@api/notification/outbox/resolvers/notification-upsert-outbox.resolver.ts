import { NotificationOutbox, NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationUpsertOutboxHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.upsert')
export class NotificationUpsertOutboxResolver
{
    constructor(
        private readonly handler: NotificationUpsertOutboxHandler,
    ) {}

    @Mutation('notificationUpsertOutbox')
    async main(
        @Args('payload') payload: NotificationUpdateOutboxByIdInput,
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
