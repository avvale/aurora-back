import { NotificationAddInboxesContextEvent, NotificationIInboxRepository, NotificationInbox } from '@app/notification/inbox';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxCreatedAt,
    NotificationInboxDeletedAt,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
    NotificationInboxUpdatedAt,
} from '@app/notification/inbox/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationUpdateAndIncrementInboxesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxRepository,
    ) {}

    async main(
        payload: {
            id?: NotificationInboxId;
            tenantIds?: NotificationInboxTenantIds;
            notificationId?: NotificationInboxNotificationId;
            sort?: NotificationInboxSort;
            accountId?: NotificationInboxAccountId;
            accountCode?: NotificationInboxAccountCode;
            isImportant?: NotificationInboxIsImportant;
            subject?: NotificationInboxSubject;
            body?: NotificationInboxBody;
            attachments?: NotificationInboxAttachments;
            isRead?: NotificationInboxIsRead;
            isReadAtLeastOnce?: NotificationInboxIsReadAtLeastOnce;
            meta?: NotificationInboxMeta;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const inbox = NotificationInbox.register(
            payload.id,
            payload.tenantIds,
            payload.notificationId,
            payload.sort,
            payload.accountId,
            payload.accountCode,
            payload.isImportant,
            payload.subject,
            payload.body,
            payload.attachments,
            payload.isRead,
            payload.isReadAtLeastOnce,
            payload.meta,
            null, // createdAt
            new NotificationInboxUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update and increment
        await this.repository.updateAndIncrement(
            inbox,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateAndIncrementOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const inboxes = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const inboxesRegister = this.publisher.mergeObjectContext(
            new NotificationAddInboxesContextEvent(inboxes),
        );

        inboxesRegister.updatedAndIncremented(); // apply event to model events
        inboxesRegister.commit(); // commit all events of model
    }
}
