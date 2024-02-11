import { Pagination } from '@api/graphql';
import { TenantPolicy } from '@api/iam/shared';
import { MessagePaginateMessagesInboxHandler } from '@api/message/inbox';
import { AuthenticationJwtGuard } from '@api/o-auth/shared';
import { IamAccountResponse } from '@app/iam/account';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@UseGuards(AuthenticationJwtGuard)
export class MessagePaginateMessagesInboxResolver
{
    constructor(
        private readonly handler: MessagePaginateMessagesInboxHandler,
    ) {}

    @Query('messagePaginateMessagesInbox')
    @TenantPolicy()
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
