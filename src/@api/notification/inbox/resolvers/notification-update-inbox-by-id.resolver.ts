import { NotificationInbox, NotificationUpdateInboxByIdInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpdateInboxByIdHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.update')
export class NotificationUpdateInboxByIdResolver
{
    constructor(
        private readonly handler: NotificationUpdateInboxByIdHandler,
    ) {}

    @Mutation('notificationUpdateInboxById')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateInboxByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInbox>
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
