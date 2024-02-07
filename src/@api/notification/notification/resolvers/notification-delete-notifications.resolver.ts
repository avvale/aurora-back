import { NotificationNotification } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationDeleteNotificationsHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.delete')
export class NotificationDeleteNotificationsResolver
{
    constructor(
        private readonly handler: NotificationDeleteNotificationsHandler,
    ) {}

    @Mutation('notificationDeleteNotifications')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationNotification[]>
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
