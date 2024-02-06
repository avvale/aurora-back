import { NotificationOutBoxNotification } from '@api/graphql';
import { NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdQuery } from '@app/notification/out-box-notification';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindOutBoxNotificationByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        return await this.queryBus.ask(new NotificationFindOutBoxNotificationByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
