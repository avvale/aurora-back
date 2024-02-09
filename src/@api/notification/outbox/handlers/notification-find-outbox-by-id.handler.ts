import { NotificationOutbox } from '@api/graphql';
import { NotificationOutboxDto } from '@api/notification/outbox';
import { NotificationFindOutboxByIdQuery } from '@app/notification/outbox';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindOutboxByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        return await this.queryBus.ask(new NotificationFindOutboxByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
