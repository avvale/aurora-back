import { NotificationIOutboxRepository } from '@app/notification/outbox';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationDeleteOutboxByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutboxRepository,
    ) {}

    async main(
        id: NotificationOutboxId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const outbox = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                outbox.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const outboxRegister = this.publisher.mergeObjectContext(outbox);

        outboxRegister.deleted(outbox); // apply event to model events
        outboxRegister.commit(); // commit all events of model
    }
}
