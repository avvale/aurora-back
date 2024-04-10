import { IamAccountResponse, IamCountAccountQuery } from '@app/iam/account';
import { AuditingMeta, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageCountTotalRecipientsMessageHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        tenantRecipientIds: string[],
        scopeRecipients: string[],
        tagRecipients: string[],
        accountRecipientIds: string[],
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<number>
    {

        const count = await this.queryBus.ask(new IamCountAccountQuery(
            {
                where: {
                    dTenants: tenantRecipientIds,
                    scopes  : scopeRecipients,
                    tags    : tagRecipients,
                    id      : accountRecipientIds,
                },
            },
            constraint,
            {
                timezone,
            },
        ));

        console.log('count', count);

        return count;
    }
}