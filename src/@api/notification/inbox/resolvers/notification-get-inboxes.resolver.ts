import { NotificationInbox } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationGetInboxesHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.get')
export class NotificationGetInboxesResolver
{
    constructor(
        private readonly handler: NotificationGetInboxesHandler,
    ) {}

    @Query('notificationGetInboxes')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationInbox[]>
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
        );
    }
}
