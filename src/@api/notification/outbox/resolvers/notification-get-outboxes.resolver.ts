import { NotificationOutbox } from '@api/graphql';
import { NotificationGetOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.get')
export class NotificationGetOutboxesResolver
{
    constructor(
        private readonly handler: NotificationGetOutboxesHandler,
    ) {}

    @Query('notificationGetOutboxes')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationOutbox[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
