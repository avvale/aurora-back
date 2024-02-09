import { NotificationIOutboxRepository, NotificationOutbox } from '@app/notification/outbox';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindOutboxByIdService
{
    constructor(
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        id: NotificationOutboxId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationOutbox>
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
