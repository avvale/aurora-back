import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { NotificationCreateNotificationsCommand } from '@app/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';

@Injectable()
export class NotificationNotificationSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateNotificationsCommand(
            notificationMockNotificationData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
