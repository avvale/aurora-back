import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationByIdCommand, NotificationFindOutBoxNotificationByIdQuery } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteOutBoxNotificationByIdHandler
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
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        const outBoxNotification = await this.queryBus.ask(new NotificationFindOutBoxNotificationByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteOutBoxNotificationByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return outBoxNotification;
    }
}
