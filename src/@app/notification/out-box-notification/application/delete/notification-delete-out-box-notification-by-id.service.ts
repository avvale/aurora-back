import { NotificationIOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationDeleteOutBoxNotificationByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        id: NotificationOutBoxNotificationId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const outBoxNotification = await this.repository
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
                outBoxNotification.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const outBoxNotificationRegister = this.publisher.mergeObjectContext(outBoxNotification);

        outBoxNotificationRegister.deleted(outBoxNotification); // apply event to model events
        outBoxNotificationRegister.commit(); // commit all events of model
    }
}
