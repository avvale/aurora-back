/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationCreateNotificationService } from '@app/notification/notification/application/create/notification-create-notification.service';
import {
    NotificationNotificationAccountIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
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
} from '@app/notification/notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationService', () =>

{
    let service: NotificationCreateNotificationService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateNotificationService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateNotificationService);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a notification and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationNotificationId(notificationMockNotificationData[0].id),
                        tenantId: new NotificationNotificationTenantId(notificationMockNotificationData[0].tenantId),
                        status: new NotificationNotificationStatus(notificationMockNotificationData[0].status),
                        accountIds: new NotificationNotificationAccountIds(notificationMockNotificationData[0].accountIds),
                        tenantIds: new NotificationNotificationTenantIds(notificationMockNotificationData[0].tenantIds),
                        scopes: new NotificationNotificationScopes(notificationMockNotificationData[0].scopes),
                        sendAt: new NotificationNotificationSendAt(notificationMockNotificationData[0].sendAt),
                        isImportant: new NotificationNotificationIsImportant(notificationMockNotificationData[0].isImportant),
                        subject: new NotificationNotificationSubject(notificationMockNotificationData[0].subject),
                        body: new NotificationNotificationBody(notificationMockNotificationData[0].body),
                        attachments: new NotificationNotificationAttachments(notificationMockNotificationData[0].attachments),
                        totalRecipients: new NotificationNotificationTotalRecipients(notificationMockNotificationData[0].totalRecipients),
                        reads: new NotificationNotificationReads(notificationMockNotificationData[0].reads),
                        meta: new NotificationNotificationMeta(notificationMockNotificationData[0].meta),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
