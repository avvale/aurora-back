import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationUpsertOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.upsert')
export class NotificationUpsertOutBoxNotificationResolver
{
    constructor(
        private readonly handler: NotificationUpsertOutBoxNotificationHandler,
    ) {}

    @Mutation('notificationUpsertOutBoxNotification')
    async main(
        @Args('payload') payload: NotificationUpdateOutBoxNotificationByIdInput,
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
