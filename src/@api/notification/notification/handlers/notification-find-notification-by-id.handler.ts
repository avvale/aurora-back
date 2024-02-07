import { NotificationNotification } from '@api/graphql';
import { NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindNotificationByIdQuery } from '@app/notification/notification';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindNotificationByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        return await this.queryBus.ask(new NotificationFindNotificationByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
