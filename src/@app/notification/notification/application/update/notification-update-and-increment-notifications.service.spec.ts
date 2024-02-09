/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationUpdateAndIncrementNotificationsService } from '@app/notification/notification/application/update/notification-update-and-increment-notifications.service';
import {
    NotificationNotificationAccountRecipientIds,
    NotificationNotificationAttachments,
    NotificationNotificationBody,
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
} from '@app/notification/notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementNotificationsService', () =>
{
    let service: NotificationUpdateAndIncrementNotificationsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateAndIncrementNotificationsService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateAndIncrementNotificationsService);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a notifications and emit event', async () =>
        {
            /* eslint-disable key-spacing */
            expect(
                await service.main(
                    {
                        id: new NotificationNotificationId(notificationMockNotificationData[0].id),
                        tenantIds: new NotificationNotificationTenantIds(notificationMockNotificationData[0].tenantIds),
                        status: new NotificationNotificationStatus(notificationMockNotificationData[0].status),
                        accountRecipientIds: new NotificationNotificationAccountRecipientIds(notificationMockNotificationData[0].accountRecipientIds),
                        tenantRecipientIds: new NotificationNotificationTenantRecipientIds(notificationMockNotificationData[0].tenantRecipientIds),
                        scopeRecipients: new NotificationNotificationScopeRecipients(notificationMockNotificationData[0].scopeRecipients),
                        sendAt: new NotificationNotificationSendAt(notificationMockNotificationData[0].sendAt),
                        isImportant: new NotificationNotificationIsImportant(notificationMockNotificationData[0].isImportant),
                        subject: new NotificationNotificationSubject(notificationMockNotificationData[0].subject),
                        body: new NotificationNotificationBody(notificationMockNotificationData[0].body),
                        attachments: new NotificationNotificationAttachments(notificationMockNotificationData[0].attachments),
                        totalRecipients: new NotificationNotificationTotalRecipients(notificationMockNotificationData[0].totalRecipients),
                        reads: new NotificationNotificationReads(notificationMockNotificationData[0].reads),
                        meta: new NotificationNotificationMeta(notificationMockNotificationData[0].meta),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
