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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpdateOutBoxNotificationsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        payload: {
            id?: NotificationOutBoxNotificationId;
            sort?: NotificationOutBoxNotificationSort;
            tenantId?: NotificationOutBoxNotificationTenantId;
            accountIds?: NotificationOutBoxNotificationAccountIds;
            accountTenantOperator?: NotificationOutBoxNotificationAccountTenantOperator;
            tenantIds?: NotificationOutBoxNotificationTenantIds;
            scopes?: NotificationOutBoxNotificationScopes;
            isImportant?: NotificationOutBoxNotificationIsImportant;
            subject?: NotificationOutBoxNotificationSubject;
            body?: NotificationOutBoxNotificationBody;
            attachments?: NotificationOutBoxNotificationAttachments;
            meta?: NotificationOutBoxNotificationMeta;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const outBoxNotification = NotificationOutBoxNotification.register(
            payload.id,
            payload.sort,
            payload.tenantId,
            payload.accountIds,
            payload.accountTenantOperator,
            payload.tenantIds,
            payload.scopes,
            payload.isImportant,
            payload.subject,
            payload.body,
            payload.attachments,
            payload.meta,
            null, // createdAt
            new NotificationOutBoxNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update
        await this.repository.update(
            outBoxNotification,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const outBoxNotifications = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const outBoxNotificationsRegister = this.publisher.mergeObjectContext(
            new NotificationAddOutBoxNotificationsContextEvent(outBoxNotifications),
        );

        outBoxNotificationsRegister.updated(); // apply event to model events
        outBoxNotificationsRegister.commit(); // commit all events of model
    }
}
