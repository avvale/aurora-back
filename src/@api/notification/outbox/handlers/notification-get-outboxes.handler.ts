import { NotificationOutbox } from '@api/graphql';
import { NotificationOutboxDto } from '@api/notification/outbox';
import { NotificationGetOutboxesQuery } from '@app/notification/outbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationGetOutboxesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationOutbox[] | NotificationOutboxDto[]>
    {
        return await this.queryBus.ask(new NotificationGetOutboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
