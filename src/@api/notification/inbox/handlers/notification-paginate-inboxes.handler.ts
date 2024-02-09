import { Pagination } from '@api/graphql';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationPaginateInboxesQuery } from '@app/notification/inbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationPaginateInboxesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new NotificationPaginateInboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
