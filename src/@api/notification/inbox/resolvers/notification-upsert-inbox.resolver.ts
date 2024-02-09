import { NotificationInbox, NotificationUpdateInboxByIdInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationUpsertInboxHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.upsert')
export class NotificationUpsertInboxResolver
{
    constructor(
        private readonly handler: NotificationUpsertInboxHandler,
    ) {}

    @Mutation('notificationUpsertInbox')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationUpdateInboxByIdInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInbox>
    {
        return await this.handler.main(
            account,
            payload,
            timezone,
            auditing,
        );
    }
}
