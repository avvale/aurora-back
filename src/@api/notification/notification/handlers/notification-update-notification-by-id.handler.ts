import { NotificationNotification, NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { NotificationNotificationDto, NotificationUpdateNotificationByIdDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindNotificationByIdQuery, NotificationUpdateNotificationByIdCommand } from '@app/notification/notification';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateNotificationByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateNotificationByIdInput | NotificationUpdateNotificationByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        const notification = await this.queryBus.ask(new NotificationFindNotificationByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, notification);

        await this.commandBus.dispatch(new NotificationUpdateNotificationByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindNotificationByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
