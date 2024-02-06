import { NotificationCreateOutBoxNotificationInput, NotificationOutBoxNotification } from '@api/graphql';
import { NotificationCreateOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.create')
export class NotificationCreateOutBoxNotificationResolver
{
    constructor(
        private readonly handler: NotificationCreateOutBoxNotificationHandler,
    ) {}

    @Mutation('notificationCreateOutBoxNotification')
    async main(
        @Args('payload') payload: NotificationCreateOutBoxNotificationInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
