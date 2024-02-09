import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { NotificationCreateInboxesCommand } from '@app/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';

@Injectable()
export class NotificationInboxSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxesCommand(
            notificationMockInboxData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
