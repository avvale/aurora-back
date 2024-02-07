import { NotificationCreateNotificationInput } from '@api/graphql';
import { NotificationCreateNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationCreateNotificationsCommand } from '@app/notification/notification';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateNotificationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationCreateNotificationInput[] | NotificationCreateNotificationDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateNotificationsCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}
