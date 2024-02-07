import { NotificationNotification, NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpsertNotificationHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.upsert')
export class NotificationUpsertNotificationResolver
{
    constructor(
        private readonly handler: NotificationUpsertNotificationHandler,
    ) {}

    @Mutation('notificationUpsertNotification')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateNotificationByIdInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationNotification>
    {
        return await this.handler.main(
            account,
            payload,
            timezone,
            auditing,
        );
    }
}
