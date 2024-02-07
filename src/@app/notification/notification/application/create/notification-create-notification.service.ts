import { NotificationINotificationRepository, NotificationNotification } from '@app/notification/notification';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
    NotificationNotificationCreatedAt,
    NotificationNotificationDeletedAt,
    NotificationNotificationId,
    NotificationNotificationIsImportant,
    NotificationNotificationMeta,
    NotificationNotificationReads,
    NotificationNotificationScopes,
    NotificationNotificationSendAt,
    NotificationNotificationStatus,
    NotificationNotificationSubject,
    NotificationNotificationTenantId,
    NotificationNotificationTenantIds,
    NotificationNotificationTotalRecipients,
    NotificationNotificationUpdatedAt,
} from '@app/notification/notification/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateNotificationService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        payload: {
            id: NotificationNotificationId;
            tenantId: NotificationNotificationTenantId;
            status: NotificationNotificationStatus;
            accountIds: NotificationNotificationAccountIds;
            tenantIds: NotificationNotificationTenantIds;
            scopes: NotificationNotificationScopes;
            sendAt: NotificationNotificationSendAt;
            isImportant: NotificationNotificationIsImportant;
            subject: NotificationNotificationSubject;
            body: NotificationNotificationBody;
            attachments: NotificationNotificationAttachments;
            totalRecipients: NotificationNotificationTotalRecipients;
            reads: NotificationNotificationReads;
            meta: NotificationNotificationMeta;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const notification = NotificationNotification.register(
            payload.id,
            payload.tenantId,
            payload.status,
            payload.accountIds,
            payload.tenantIds,
            payload.scopes,
            payload.sendAt,
            payload.isImportant,
            payload.subject,
            payload.body,
            payload.attachments,
            payload.totalRecipients,
            payload.reads,
            payload.meta,
            new NotificationNotificationCreatedAt({ currentTimestamp: true }),
            new NotificationNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            notification,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const notificationRegister = this.publisher.mergeObjectContext(
            notification,
        );

        notificationRegister.created(notification); // apply event to model events
        notificationRegister.commit(); // commit all events of model
    }
}
