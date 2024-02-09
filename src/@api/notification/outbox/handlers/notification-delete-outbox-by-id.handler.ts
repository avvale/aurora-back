import { NotificationOutbox } from '@api/graphql';
import { NotificationOutboxDto } from '@api/notification/outbox';
import { NotificationDeleteOutboxByIdCommand, NotificationFindOutboxByIdQuery } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteOutboxByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        const outbox = await this.queryBus.ask(new NotificationFindOutboxByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteOutboxByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return outbox;
    }
}
