import { NotificationOutbox } from '@api/graphql';
import { NotificationFindOutboxHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.get')
export class NotificationFindOutboxResolver
{
    constructor(
        private readonly handler: NotificationFindOutboxHandler,
    ) {}

    @Query('notificationFindOutbox')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
