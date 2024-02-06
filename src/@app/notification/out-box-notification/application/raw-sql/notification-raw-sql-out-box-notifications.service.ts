import { NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationRawSQLOutBoxNotificationsService
{
    constructor(
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationOutBoxNotification[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
