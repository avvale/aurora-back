import { NotificationCreateOutboxInput } from '@api/graphql';
import { NotificationCreateOutboxDto } from '@api/notification/outbox';
import { NotificationCreateOutboxesCommand } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateOutboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: NotificationCreateOutboxInput[] | NotificationCreateOutboxDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateOutboxesCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}
