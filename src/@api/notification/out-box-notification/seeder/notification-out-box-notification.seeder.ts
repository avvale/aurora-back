import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { NotificationCreateOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';

@Injectable()
export class NotificationOutBoxNotificationSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateOutBoxNotificationsCommand(
            notificationMockOutBoxNotificationData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
