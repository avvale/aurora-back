import { MessageInbox } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { MessageCustomerMessageInboxHandler } from '@api/message/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('message.inbox.get')
export class MessageCustomerMessageInboxResolver
{
    constructor(
        private readonly handler: MessageCustomerMessageInboxHandler,
    ) {}

    @Query('messageCustomerMessageInbox')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<MessageInbox[]>
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
