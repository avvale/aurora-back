import { Pagination } from '@api/graphql';
import { NotificationPaginateInboxSettingsQuery } from '@app/notification/inbox-setting';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationPaginateInboxSettingsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new NotificationPaginateInboxSettingsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
