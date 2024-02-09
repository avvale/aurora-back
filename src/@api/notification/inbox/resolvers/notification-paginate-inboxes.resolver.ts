import { Pagination } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationPaginateInboxesHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.get')
export class NotificationPaginateInboxesResolver
{
    constructor(
        private readonly handler: NotificationPaginateInboxesHandler,
    ) {}

    @Query('notificationPaginateInboxes')
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
