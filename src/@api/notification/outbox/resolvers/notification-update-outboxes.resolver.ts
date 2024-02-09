import { NotificationOutbox, NotificationUpdateOutboxesInput } from '@api/graphql';
import { NotificationUpdateOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.update')
export class NotificationUpdateOutboxesResolver
{
    constructor(
        private readonly handler: NotificationUpdateOutboxesHandler,
    ) {}

    @Mutation('notificationUpdateOutboxes')
    async main(
        @Args('payload') payload: NotificationUpdateOutboxesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
