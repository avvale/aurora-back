import { NotificationInbox, NotificationUpdateInboxesInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpdateInboxesHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.update')
export class NotificationUpdateInboxesResolver
{
    constructor(
        private readonly handler: NotificationUpdateInboxesHandler,
    ) {}

    @Mutation('notificationUpdateInboxes')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateInboxesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInbox>
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
