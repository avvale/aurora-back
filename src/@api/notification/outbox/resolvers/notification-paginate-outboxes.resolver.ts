import { Pagination } from '@api/graphql';
import { NotificationPaginateOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.get')
export class NotificationPaginateOutboxesResolver
{
    constructor(
        private readonly handler: NotificationPaginateOutboxesHandler,
    ) {}

    @Query('notificationPaginateOutboxes')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
