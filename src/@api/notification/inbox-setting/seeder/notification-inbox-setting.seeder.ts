import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { NotificationCreateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';

@Injectable()
export class NotificationInboxSettingSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxSettingsCommand(
            notificationMockInboxSettingData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
