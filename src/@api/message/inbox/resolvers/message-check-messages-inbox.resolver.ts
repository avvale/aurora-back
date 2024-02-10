import { Pagination } from '@api/graphql';
import { MessageCheckMessagesInboxHandler } from '@api/message/inbox';
import { AuthenticationJwtGuard } from '@api/o-auth/shared';
import { IamAccountResponse } from '@app/iam/account';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@UseGuards(AuthenticationJwtGuard)
export class MessageCheckMessagesInboxResolver
{
    constructor(
        private readonly handler: MessageCheckMessagesInboxHandler,
    ) {}

    @Mutation('messageCheckMessagesInbox')
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('query') query?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            account,
            query,
            timezone,
            auditing,
        );
    }
}
