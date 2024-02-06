import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationFindOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.get')
export class NotificationFindOutBoxNotificationResolver
{
    constructor(
        private readonly handler: NotificationFindOutBoxNotificationHandler,
    ) {}

    @Query('notificationFindOutBoxNotification')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationOutBoxNotification>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
