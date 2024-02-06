import { NotificationAddOutBoxNotificationsContextEvent, NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationCreatedAt,
    NotificationOutBoxNotificationDeletedAt,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
    NotificationOutBoxNotificationUpdatedAt,
} from '@app/notification/out-box-notification/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateOutBoxNotificationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        payload: {
            id: NotificationOutBoxNotificationId;
            sort: NotificationOutBoxNotificationSort;
            tenantId: NotificationOutBoxNotificationTenantId;
            accountIds: NotificationOutBoxNotificationAccountIds;
            accountTenantOperator: NotificationOutBoxNotificationAccountTenantOperator;
            tenantIds: NotificationOutBoxNotificationTenantIds;
            scopes: NotificationOutBoxNotificationScopes;
            isImportant: NotificationOutBoxNotificationIsImportant;
            subject: NotificationOutBoxNotificationSubject;
            body: NotificationOutBoxNotificationBody;
            attachments: NotificationOutBoxNotificationAttachments;
            meta: NotificationOutBoxNotificationMeta;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateOutBoxNotifications = payload.map(outBoxNotification => NotificationOutBoxNotification.register(
            outBoxNotification.id,
            outBoxNotification.sort,
            outBoxNotification.tenantId,
            outBoxNotification.accountIds,
            outBoxNotification.accountTenantOperator,
            outBoxNotification.tenantIds,
            outBoxNotification.scopes,
            outBoxNotification.isImportant,
            outBoxNotification.subject,
            outBoxNotification.body,
            outBoxNotification.attachments,
            outBoxNotification.meta,
            new NotificationOutBoxNotificationCreatedAt({ currentTimestamp: true }),
            new NotificationOutBoxNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateOutBoxNotifications,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddOutBoxNotificationsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const outBoxNotificationsRegistered = this.publisher.mergeObjectContext(new NotificationAddOutBoxNotificationsContextEvent(aggregateOutBoxNotifications));

        outBoxNotificationsRegistered.created(); // apply event to model events
        outBoxNotificationsRegistered.commit(); // commit all events of model
    }
}
