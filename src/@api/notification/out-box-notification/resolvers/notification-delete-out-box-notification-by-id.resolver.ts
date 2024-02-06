import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationDeleteOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outBoxNotification.delete')
export class NotificationDeleteOutBoxNotificationByIdResolver
{
    constructor(
        private readonly handler: NotificationDeleteOutBoxNotificationByIdHandler,
    ) {}

    @Mutation('notificationDeleteOutBoxNotificationById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
