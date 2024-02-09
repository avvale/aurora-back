import { NotificationCreateNotificationInput, NotificationNotification } from '@api/graphql';
import { NotificationCreateNotificationDto, NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationCreateNotificationCommand, NotificationFindNotificationByIdQuery } from '@app/notification/notification';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateNotificationHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationCreateNotificationInput | NotificationCreateNotificationDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationNotification | NotificationNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationCreateNotificationCommand(
            {
                ...payload,
                totalRecipients: 0,
                reads          : 0,
            },
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
