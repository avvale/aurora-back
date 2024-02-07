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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpdateNotificationByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        payload: {
            id: NotificationNotificationId;
            tenantId?: NotificationNotificationTenantId;
            status?: NotificationNotificationStatus;
            accountIds?: NotificationNotificationAccountIds;
            tenantIds?: NotificationNotificationTenantIds;
            scopes?: NotificationNotificationScopes;
            sendAt?: NotificationNotificationSendAt;
            isImportant?: NotificationNotificationIsImportant;
            subject?: NotificationNotificationSubject;
            body?: NotificationNotificationBody;
            attachments?: NotificationNotificationAttachments;
            totalRecipients?: NotificationNotificationTotalRecipients;
            reads?: NotificationNotificationReads;
            meta?: NotificationNotificationMeta;
        },
        constraint?: QueryStatement,
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
            null, // createdAt
            new NotificationNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            notification,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const notificationRegister = this.publisher.mergeObjectContext(
            notification,
        );

        notificationRegister.updated(notification); // apply event to model events
        notificationRegister.commit(); // commit all events of model
    }
}
