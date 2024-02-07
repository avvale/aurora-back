import { NotificationINotificationRepository } from '@app/notification/notification';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationDeleteNotificationByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        id: NotificationNotificationId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const notification = await this.repository
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
                notification.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const notificationRegister = this.publisher.mergeObjectContext(notification);

        notificationRegister.deleted(notification); // apply event to model events
        notificationRegister.commit(); // commit all events of model
    }
}
