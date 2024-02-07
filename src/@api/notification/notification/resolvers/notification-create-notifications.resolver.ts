import { NotificationCreateNotificationInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationCreateNotificationsHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.create')
export class NotificationCreateNotificationsResolver
{
    constructor(
        private readonly handler: NotificationCreateNotificationsHandler,
    ) {}

    @Mutation('notificationCreateNotifications')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationCreateNotificationInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            account,
            payload,
            timezone,
            auditing,
        );
    }
}
