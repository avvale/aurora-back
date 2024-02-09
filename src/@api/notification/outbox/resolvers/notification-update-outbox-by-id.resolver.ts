import { NotificationOutbox, NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationUpdateOutboxByIdHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.update')
export class NotificationUpdateOutboxByIdResolver
{
    constructor(
        private readonly handler: NotificationUpdateOutboxByIdHandler,
    ) {}

    @Mutation('notificationUpdateOutboxById')
    async main(
        @Args('payload') payload: NotificationUpdateOutboxByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
