import { NotificationNotification, NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { NotificationNotificationDto, NotificationUpdateNotificationByIdDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindNotificationByIdQuery, NotificationUpsertNotificationCommand } from '@app/notification/notification';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpsertNotificationHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateNotificationByIdInput | NotificationUpdateNotificationByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationUpsertNotificationCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindNotificationByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
