import { NotificationCreateOutBoxNotificationInput } from '@api/graphql';
import { NotificationCreateOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateOutBoxNotificationsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: NotificationCreateOutBoxNotificationInput[] | NotificationCreateOutBoxNotificationDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateOutBoxNotificationsCommand(
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
