import { Pagination } from '@api/graphql';
import { NotificationCheckNotificationsInboxHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.access')
export class NotificationCheckNotificationsInboxResolver
{
    constructor(
        private readonly handler: NotificationCheckNotificationsInboxHandler,
    ) {}

    @Mutation('notificationCheckNotificationsInbox')
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') query?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            account,
            query,
            timezone,
            auditing,
        );
    }
}
