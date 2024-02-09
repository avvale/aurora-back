import { NotificationAddNotificationsContextEvent, NotificationINotificationRepository, NotificationNotification } from '@app/notification/notification';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopeRecipients,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantIds,
    NotificationNotificationTenantRecipientIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateNotificationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        payload: {
            id: NotificationNotificationId;
            tenantIds: NotificationNotificationTenantIds;
            status: NotificationNotificationStatus;
            accountRecipientIds: NotificationNotificationAccountRecipientIds;
            tenantRecipientIds: NotificationNotificationTenantRecipientIds;
            scopeRecipients: NotificationNotificationScopeRecipients;
            sendAt: NotificationNotificationSendAt;
            isImportant: NotificationNotificationIsImportant;
            subject: NotificationNotificationSubject;
            body: NotificationNotificationBody;
            attachments: NotificationNotificationAttachments;
            totalRecipients: NotificationNotificationTotalRecipients;
            reads: NotificationNotificationReads;
            meta: NotificationNotificationMeta;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateNotifications = payload.map(notification => NotificationNotification.register(
            notification.id,
            notification.tenantIds,
            notification.status,
            notification.accountRecipientIds,
            notification.tenantRecipientIds,
            notification.scopeRecipients,
            notification.sendAt,
            notification.isImportant,
            notification.subject,
            notification.body,
            notification.attachments,
            notification.totalRecipients,
            notification.reads,
            notification.meta,
            new NotificationNotificationCreatedAt({ currentTimestamp: true }),
            new NotificationNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateNotifications,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddNotificationsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const notificationsRegistered = this.publisher.mergeObjectContext(new NotificationAddNotificationsContextEvent(aggregateNotifications));

        notificationsRegistered.created(); // apply event to model events
        notificationsRegistered.commit(); // commit all events of model
    }
}
