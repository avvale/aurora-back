import { NotificationNotification, NotificationUpdateNotificationsInput } from '@api/graphql';
import { NotificationNotificationDto, NotificationUpdateNotificationsDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationGetNotificationsQuery, NotificationUpdateNotificationsCommand } from '@app/notification/notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateNotificationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateNotificationsInput | NotificationUpdateNotificationsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationUpdateNotificationsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationGetNotificationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
