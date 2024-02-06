import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.update')
export class NotificationUpdateOutBoxNotificationByIdResolver
{
    constructor(
        private readonly handler: NotificationUpdateOutBoxNotificationByIdHandler,
    ) {}

    @Mutation('notificationUpdateOutBoxNotificationById')
    async main(
        @Args('payload') payload: NotificationUpdateOutBoxNotificationByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
