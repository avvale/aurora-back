import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationFindOutBoxNotificationQuery } from '@app/notification/out-box-notification';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindOutBoxNotificationHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        return await this.queryBus.ask(new NotificationFindOutBoxNotificationQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
