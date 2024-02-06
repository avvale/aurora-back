import { NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification } from '@app/notification/out-box-notification';
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
export class NotificationCreateOutBoxNotificationService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIOutBoxNotificationRepository,
    ) {}

    async main(
        payload: {
            id: NotificationOutBoxNotificationId;
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
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const outBoxNotification = NotificationOutBoxNotification.register(
            payload.id,
            undefined,
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
            new NotificationOutBoxNotificationCreatedAt({ currentTimestamp: true }),
            new NotificationOutBoxNotificationUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            outBoxNotification,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const outBoxNotificationRegister = this.publisher.mergeObjectContext(
            outBoxNotification,
        );

        outBoxNotificationRegister.created(outBoxNotification); // apply event to model events
        outBoxNotificationRegister.commit(); // commit all events of model
    }
}
