/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxRepository, notificationMockInboxData, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationCreateInboxService } from '@app/notification/inbox/application/create/notification-create-inbox.service';
import {
    NotificationInboxAccountCode,
    NotificationInboxAccountId,
    NotificationInboxAttachments,
    NotificationInboxBody,
    NotificationInboxId,
    NotificationInboxIsImportant,
    NotificationInboxIsRead,
    NotificationInboxIsReadAtLeastOnce,
    NotificationInboxMeta,
    NotificationInboxNotificationId,
    NotificationInboxSort,
    NotificationInboxSubject,
    NotificationInboxTenantIds,
} from '@app/notification/inbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxService', () =>

{
    let service: NotificationCreateInboxService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateInboxService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateInboxService);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a inbox and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationInboxId(notificationMockInboxData[0].id),
                        tenantIds: new NotificationInboxTenantIds(notificationMockInboxData[0].tenantIds),
                        notificationId: new NotificationInboxNotificationId(notificationMockInboxData[0].notificationId),
                        sort: new NotificationInboxSort(notificationMockInboxData[0].sort),
                        accountId: new NotificationInboxAccountId(notificationMockInboxData[0].accountId),
                        accountCode: new NotificationInboxAccountCode(notificationMockInboxData[0].accountCode),
                        isImportant: new NotificationInboxIsImportant(notificationMockInboxData[0].isImportant),
                        subject: new NotificationInboxSubject(notificationMockInboxData[0].subject),
                        body: new NotificationInboxBody(notificationMockInboxData[0].body),
                        attachments: new NotificationInboxAttachments(notificationMockInboxData[0].attachments),
                        isRead: new NotificationInboxIsRead(notificationMockInboxData[0].isRead),
                        isReadAtLeastOnce: new NotificationInboxIsReadAtLeastOnce(notificationMockInboxData[0].isReadAtLeastOnce),
                        meta: new NotificationInboxMeta(notificationMockInboxData[0].meta),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
