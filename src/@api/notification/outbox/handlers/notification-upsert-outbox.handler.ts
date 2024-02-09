import { NotificationOutbox, NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationOutboxDto, NotificationUpdateOutboxByIdDto } from '@api/notification/outbox';
import { NotificationFindOutboxByIdQuery, NotificationUpsertOutboxCommand } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpsertOutboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutboxByIdInput | NotificationUpdateOutboxByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutbox | NotificationOutboxDto>
    {
        await this.commandBus.dispatch(new NotificationUpsertOutboxCommand(
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
