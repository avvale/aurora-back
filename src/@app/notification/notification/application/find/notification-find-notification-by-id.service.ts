import { NotificationINotificationRepository, NotificationNotification } from '@app/notification/notification';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindNotificationByIdService
{
    constructor(
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        id: NotificationNotificationId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationNotification>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
