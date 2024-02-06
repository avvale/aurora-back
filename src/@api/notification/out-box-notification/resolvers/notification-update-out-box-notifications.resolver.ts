import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationsInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.update')
export class NotificationUpdateOutBoxNotificationsResolver
{
    constructor(
        private readonly handler: NotificationUpdateOutBoxNotificationsHandler,
    ) {}

    @Mutation('notificationUpdateOutBoxNotifications')
    async main(
        @Args('payload') payload: NotificationUpdateOutBoxNotificationsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification>
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
