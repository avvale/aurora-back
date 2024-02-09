import { NotificationOutbox, NotificationUpdateOutboxesInput } from '@api/graphql';
import { NotificationOutboxDto, NotificationUpdateOutboxesDto } from '@api/notification/outbox';
import { NotificationGetOutboxesQuery, NotificationUpdateOutboxesCommand } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateOutboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutboxesInput | NotificationUpdateOutboxesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        await this.commandBus.dispatch(new NotificationUpdateOutboxesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationGetOutboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
