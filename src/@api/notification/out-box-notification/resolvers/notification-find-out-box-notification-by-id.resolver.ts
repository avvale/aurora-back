import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationFindOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.get')
export class NotificationFindOutBoxNotificationByIdResolver
{
    constructor(
        private readonly handler: NotificationFindOutBoxNotificationByIdHandler,
    ) {}

    @Query('notificationFindOutBoxNotificationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationOutBoxNotification>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
