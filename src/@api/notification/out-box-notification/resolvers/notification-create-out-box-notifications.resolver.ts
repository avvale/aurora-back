import { NotificationCreateOutBoxNotificationInput } from '@api/graphql';
import { NotificationCreateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.create')
export class NotificationCreateOutBoxNotificationsResolver
{
    constructor(
        private readonly handler: NotificationCreateOutBoxNotificationsHandler,
    ) {}

    @Mutation('notificationCreateOutBoxNotifications')
    async main(
        @Args('payload') payload: NotificationCreateOutBoxNotificationInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
