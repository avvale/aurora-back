import { NotificationNotification, NotificationUpdateNotificationsInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpdateNotificationsHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.update')
export class NotificationUpdateNotificationsResolver
{
    constructor(
        private readonly handler: NotificationUpdateNotificationsHandler,
    ) {}

    @Mutation('notificationUpdateNotifications')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateNotificationsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationNotification>
    {
        return await this.handler.main(
            account,
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
