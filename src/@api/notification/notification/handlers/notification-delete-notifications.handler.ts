import { NotificationNotification } from '@api/graphql';
import { NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationDeleteNotificationsCommand, NotificationGetNotificationsQuery } from '@app/notification/notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteNotificationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification[] | NotificationNotificationDto[]>
    {
        const notifications = await this.queryBus.ask(new NotificationGetNotificationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteNotificationsCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return notifications;
    }
}
