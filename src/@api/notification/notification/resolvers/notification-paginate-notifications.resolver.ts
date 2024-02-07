import { Pagination } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationPaginateNotificationsHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.get')
export class NotificationPaginateNotificationsResolver
{
    constructor(
        private readonly handler: NotificationPaginateNotificationsHandler,
    ) {}

    @Query('notificationPaginateNotifications')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
