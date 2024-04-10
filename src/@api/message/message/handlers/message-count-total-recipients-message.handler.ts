import { IamCountAccountQuery } from '@app/iam/account';
import { IQueryBus, Operator, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageCountTotalRecipientsMessageHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        tenantRecipientIds: string[],
        scopeRecipients: string[],
        tagRecipients: string[],
        accountRecipientIds: string[],
        constraint?: QueryStatement,
    ): Promise<number>
    {
        return await this.queryBus.ask(new IamCountAccountQuery(
            {
                where: {
                    [Operator.or]: [
                        {
                            // query messages for tenants that account belongs to
                            dTenants: {
                                [Operator.overlap]: tenantRecipientIds,
                            },
                        },
                        {
                            // query messages for scopes that account belongs to
                            scopes: {
                                [Operator.overlap]: scopeRecipients,
                            },
                        },
                        {
                            // query messages for tags that account belongs to
                            tags: {
                                [Operator.overlap]: tagRecipients,
                            },
                        },
                        {
                            // query messages for account
                            id: {
                                [Operator.in]: accountRecipientIds || [],
                            },
                        },
                    ],
                },
            },
            constraint,
        ));
    }
}