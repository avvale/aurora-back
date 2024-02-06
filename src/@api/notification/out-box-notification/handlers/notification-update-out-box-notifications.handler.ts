import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationsInput } from '@api/graphql';
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationsDto } from '@api/notification/out-box-notification';
import { NotificationGetOutBoxNotificationsQuery, NotificationUpdateOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateOutBoxNotificationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutBoxNotificationsInput | NotificationUpdateOutBoxNotificationsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationUpdateOutBoxNotificationsCommand(
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

        return await this.queryBus.ask(new NotificationGetOutBoxNotificationsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
