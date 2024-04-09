import { MessageInbox } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { MessageUnreadCustomerMessageInboxHandler } from '@api/message/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('message.inbox.update')
export class MessageUnreadCustomerMessageInboxResolver
{
    constructor(
        private readonly handler: MessageUnreadCustomerMessageInboxHandler,
    ) {}

    @Mutation('messageUnreadCustomerMessageInbox')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<MessageInbox>
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
