import { NotificationIOutboxRepository, NotificationOutbox } from '@app/notification/outbox';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationRawSQLOutboxesService
{
    constructor(
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationOutbox[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
