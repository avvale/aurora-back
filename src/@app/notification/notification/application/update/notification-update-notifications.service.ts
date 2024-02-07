import { NotificationAddNotificationsContextEvent, NotificationINotificationRepository, NotificationNotification } from '@app/notification/notification';
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
export class NotificationUpdateNotificationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationINotificationRepository,
    ) {}

    async main(
        payload: {
            id?: NotificationNotificationId;
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
        queryStatement?: QueryStatement,
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

        // update
        await this.repository.update(
            notification,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const notifications = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const notificationsRegister = this.publisher.mergeObjectContext(
            new NotificationAddNotificationsContextEvent(notifications),
        );

        notificationsRegister.updated(); // apply event to model events
        notificationsRegister.commit(); // commit all events of model
    }
}
