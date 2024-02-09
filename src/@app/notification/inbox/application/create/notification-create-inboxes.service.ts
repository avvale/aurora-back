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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationCreateInboxesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxRepository,
    ) {}

    async main(
        payload: {
            id: NotificationInboxId;
            tenantIds: NotificationInboxTenantIds;
            notificationId: NotificationInboxNotificationId;
            sort: NotificationInboxSort;
            accountId: NotificationInboxAccountId;
            accountCode: NotificationInboxAccountCode;
            isImportant: NotificationInboxIsImportant;
            subject: NotificationInboxSubject;
            body: NotificationInboxBody;
            attachments: NotificationInboxAttachments;
            isRead: NotificationInboxIsRead;
            isReadAtLeastOnce: NotificationInboxIsReadAtLeastOnce;
            meta: NotificationInboxMeta;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateInboxes = payload.map(inbox => NotificationInbox.register(
            inbox.id,
            inbox.tenantIds,
            inbox.notificationId,
            inbox.sort,
            inbox.accountId,
            inbox.accountCode,
            inbox.isImportant,
            inbox.subject,
            inbox.body,
            inbox.attachments,
            inbox.isRead,
            inbox.isReadAtLeastOnce,
            inbox.meta,
            new NotificationInboxCreatedAt({ currentTimestamp: true }),
            new NotificationInboxUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateInboxes,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddInboxesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const inboxesRegistered = this.publisher.mergeObjectContext(new NotificationAddInboxesContextEvent(aggregateInboxes));

        inboxesRegistered.created(); // apply event to model events
        inboxesRegistered.commit(); // commit all events of model
    }
}
