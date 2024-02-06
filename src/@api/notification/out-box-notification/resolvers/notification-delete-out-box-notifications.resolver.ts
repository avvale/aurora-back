import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationDeleteOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.delete')
export class NotificationDeleteOutBoxNotificationsResolver
{
    constructor(
        private readonly handler: NotificationDeleteOutBoxNotificationsHandler,
    ) {}

    @Mutation('notificationDeleteOutBoxNotifications')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
