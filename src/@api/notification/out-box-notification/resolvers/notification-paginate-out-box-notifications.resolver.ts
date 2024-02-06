import { Pagination } from '@api/graphql';
import { NotificationPaginateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.get')
export class NotificationPaginateOutBoxNotificationsResolver
{
    constructor(
        private readonly handler: NotificationPaginateOutBoxNotificationsHandler,
    ) {}

    @Query('notificationPaginateOutBoxNotifications')
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
