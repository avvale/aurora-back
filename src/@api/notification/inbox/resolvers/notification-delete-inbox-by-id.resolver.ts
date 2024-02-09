import { NotificationInbox } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationDeleteInboxByIdHandler } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inbox.delete')
export class NotificationDeleteInboxByIdResolver
{
    constructor(
        private readonly handler: NotificationDeleteInboxByIdHandler,
    ) {}

    @Mutation('notificationDeleteInboxById')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInbox>
    {
        return await this.handler.main(
            account,
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
