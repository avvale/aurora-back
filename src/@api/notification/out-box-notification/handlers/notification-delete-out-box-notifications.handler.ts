import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationsCommand, NotificationGetOutBoxNotificationsQuery } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteOutBoxNotificationsHandler
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
    ): Promise<NotificationOutBoxNotification[] | NotificationOutBoxNotificationDto[]>
    {
        const outBoxNotifications = await this.queryBus.ask(new NotificationGetOutBoxNotificationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteOutBoxNotificationsCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return outBoxNotifications;
    }
}
