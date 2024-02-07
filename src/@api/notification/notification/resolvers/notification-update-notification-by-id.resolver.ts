import { NotificationNotification, NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpdateNotificationByIdHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.update')
export class NotificationUpdateNotificationByIdResolver
{
    constructor(
        private readonly handler: NotificationUpdateNotificationByIdHandler,
    ) {}

    @Mutation('notificationUpdateNotificationById')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateNotificationByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationNotification>
    {
        return await this.handler.main(
            account,
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
