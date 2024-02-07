import { NotificationINotificationRepository, NotificationNotification } from '@app/notification/notification';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationRawSQLNotificationsService
{
    constructor(
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationNotification[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
