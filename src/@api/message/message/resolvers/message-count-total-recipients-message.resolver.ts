import { TenantPolicy } from '@api/iam/shared';
import { MessageCountTotalRecipientsMessageHandler } from '@api/message/message';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('message.message.update')
export class MessageCountTotalRecipientsMessageResolver
{
    constructor(
        private readonly handler: MessageCountTotalRecipientsMessageHandler,
    ) {}

    @Query('messageCountTotalRecipientsMessage')
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('tenantRecipientIds') tenantRecipientIds: string[],
        @Args('scopeRecipients') scopeRecipients: string[],
        @Args('tagRecipients') tagRecipients: string[],
        @Args('accountRecipientIds') accountRecipientIds: string[],
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<number>
    {
        return await this.handler.main(
            account,
            tenantRecipientIds,
            scopeRecipients,
            tagRecipients,
            accountRecipientIds,
            constraint,
            timezone,
            auditing,
        );
    }
}
