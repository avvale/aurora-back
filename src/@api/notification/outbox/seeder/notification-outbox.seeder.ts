import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { NotificationCreateOutboxesCommand } from '@app/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';

@Injectable()
export class NotificationOutboxSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateOutboxesCommand(
            notificationMockOutboxData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
