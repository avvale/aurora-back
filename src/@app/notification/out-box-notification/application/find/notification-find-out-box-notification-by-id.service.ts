import { NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindOutBoxNotificationByIdService
{
    constructor(
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        id: NotificationOutBoxNotificationId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationOutBoxNotification>
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
