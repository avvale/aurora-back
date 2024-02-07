import { NotificationNotification } from '@api/graphql';
import { NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationDeleteNotificationByIdCommand, NotificationFindNotificationByIdQuery } from '@app/notification/notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteNotificationByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        const notification = await this.queryBus.ask(new NotificationFindNotificationByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteNotificationByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return notification;
    }
}
