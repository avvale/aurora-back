import { NotificationCreateInboxInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { NotificationCreateInboxesHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.create')
export class NotificationCreateInboxesResolver
{
    constructor(
        private readonly handler: NotificationCreateInboxesHandler,
    ) {}

    @Mutation('notificationCreateInboxes')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: NotificationCreateInboxInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            account,
            payload,
            timezone,
            auditing,
        );
    }
}
