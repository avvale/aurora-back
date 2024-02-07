import { NotificationNotification } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationFindNotificationHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.get')
export class NotificationFindNotificationResolver
{
    constructor(
        private readonly handler: NotificationFindNotificationHandler,
    ) {}

    @Query('notificationFindNotification')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationNotification>
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
