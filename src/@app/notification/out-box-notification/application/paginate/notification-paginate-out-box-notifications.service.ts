import { NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationPaginateOutBoxNotificationsService
{
    constructor(
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<NotificationOutBoxNotification>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
