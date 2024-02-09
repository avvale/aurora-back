import { NotificationOutbox } from '@api/graphql';
import { NotificationDeleteOutboxByIdHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.delete')
export class NotificationDeleteOutboxByIdResolver
{
    constructor(
        private readonly handler: NotificationDeleteOutboxByIdHandler,
    ) {}

    @Mutation('notificationDeleteOutboxById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
