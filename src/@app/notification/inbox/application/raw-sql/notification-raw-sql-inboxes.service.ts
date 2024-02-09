import { NotificationIInboxRepository, NotificationInbox } from '@app/notification/inbox';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationRawSQLInboxesService
{
    constructor(
        private readonly repository: NotificationIInboxRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationInbox[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
