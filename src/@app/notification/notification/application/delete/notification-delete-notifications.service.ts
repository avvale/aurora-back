import { NotificationAddNotificationsContextEvent, NotificationINotificationRepository } from '@app/notification/notification';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationDeleteNotificationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const notifications = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (notifications.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddNotificationsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const notificationsRegistered = this.publisher.mergeObjectContext(
            new NotificationAddNotificationsContextEvent(notifications),
        );

        notificationsRegistered.deleted(); // apply event to model events
        notificationsRegistered.commit(); // commit all events of model
    }
}
