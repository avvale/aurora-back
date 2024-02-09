import { NotificationInbox } from '@api/graphql';
import { NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindInboxQuery } from '@app/notification/inbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindInboxHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationInbox | NotificationInboxDto>
    {
        return await this.queryBus.ask(new NotificationFindInboxQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
