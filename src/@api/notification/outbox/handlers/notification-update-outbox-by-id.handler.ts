import { NotificationOutbox, NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationOutboxDto, NotificationUpdateOutboxByIdDto } from '@api/notification/outbox';
import { NotificationFindOutboxByIdQuery, NotificationUpdateOutboxByIdCommand } from '@app/notification/outbox';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateOutboxByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutboxByIdInput | NotificationUpdateOutboxByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        const outbox = await this.queryBus.ask(new NotificationFindOutboxByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, outbox);

        await this.commandBus.dispatch(new NotificationUpdateOutboxByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindOutboxByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
