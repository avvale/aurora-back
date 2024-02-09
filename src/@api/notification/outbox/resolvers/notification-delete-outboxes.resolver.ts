import { NotificationOutbox } from '@api/graphql';
import { NotificationDeleteOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.delete')
export class NotificationDeleteOutboxesResolver
{
    constructor(
        private readonly handler: NotificationDeleteOutboxesHandler,
    ) {}

    @Mutation('notificationDeleteOutboxes')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutbox[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
