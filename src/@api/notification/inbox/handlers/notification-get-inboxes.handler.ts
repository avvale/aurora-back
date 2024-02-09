import { NotificationInbox } from '@api/graphql';
import { NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationGetInboxesQuery } from '@app/notification/inbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationGetInboxesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationInbox[] | NotificationInboxDto[]>
    {
        return await this.queryBus.ask(new NotificationGetInboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
