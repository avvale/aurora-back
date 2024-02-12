import { MessageUpdateInboxByIdInput } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { MessageDeleteCustomerMessageInboxHandler } from '@api/message/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('message.inbox.update')
export class MessageDeleteCustomerMessageInboxResolver
{
    constructor(
        private readonly handler: MessageDeleteCustomerMessageInboxHandler,
    ) {}

    @Mutation('messageDeleteCustomerMessageInbox')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('payload') payload: MessageUpdateInboxByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
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
