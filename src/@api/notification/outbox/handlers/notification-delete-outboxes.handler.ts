import { NotificationOutbox } from '@api/graphql';
import { NotificationOutboxDto } from '@api/notification/outbox';
import { NotificationDeleteOutboxesCommand, NotificationGetOutboxesQuery } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteOutboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox[] | NotificationOutboxDto[]>
    {
        const outboxes = await this.queryBus.ask(new NotificationGetOutboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteOutboxesCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return outboxes;
    }
}
