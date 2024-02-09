import { NotificationCreateOutboxInput, NotificationOutbox } from '@api/graphql';
import { NotificationCreateOutboxDto, NotificationOutboxDto } from '@api/notification/outbox';
import { NotificationCreateOutboxCommand, NotificationFindOutboxByIdQuery } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateOutboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationCreateOutboxInput | NotificationCreateOutboxDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        await this.commandBus.dispatch(new NotificationCreateOutboxCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindOutboxByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
