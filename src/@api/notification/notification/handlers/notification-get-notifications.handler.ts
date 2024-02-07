import { NotificationNotification } from '@api/graphql';
import { NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationGetNotificationsQuery } from '@app/notification/notification';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationGetNotificationsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationNotification[] | NotificationNotificationDto[]>
    {
        return await this.queryBus.ask(new NotificationGetNotificationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
